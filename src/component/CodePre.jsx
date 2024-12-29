'use client';

import { useState, useCallback, memo, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';

const CopyButton = memo(({ onClick, copied }) => (
  <button
    aria-label="Copiar código"
    aria-live="polite"
    className="p-1 opacity-70 hover:opacity-100 transition-opacity"
    onClick={onClick}
  >
    {copied ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    )}
  </button>
));

CopyButton.displayName = 'CopyButton';

const HighlightedCode = memo(({ code, language, theme }) => {
  const prismTheme = theme === 'dark' ? themes.oneDark : themes.oneLight;

  return (
    <Highlight
      code={code.trim()}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`text-sm m-0 p-4 font-mono bg-white dark:bg-zinc-900 ${className}`}
          style={{
            overflowX: 'auto',
            whiteSpace: 'pre'
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i} className="leading-relaxed">
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
});

HighlightedCode.displayName = 'HighlightedCode';

const CodePre = ({ children, language }) => {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = useCallback(() => {
    setCopied(true);
    navigator.clipboard.writeText(children);
    setTimeout(() => setCopied(false), 2000);
  }, [children]);

  if (!mounted) {
    return (
      <div className="relative border border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-between items-center px-3 py-1.5 bg-zinc-50 dark:bg-black">
          <span className="text-sm font-medium text-zinc-500">{language.toLowerCase()}</span>
        </div>
        <pre className="text-sm m-0 p-4 font-mono bg-white dark:bg-zinc-900">
          {children}
        </pre>
      </div>
    );
  }

  return (
    <div className="relative border border-zinc-200 dark:border-zinc-800">
      <div className="flex justify-between items-center px-3 py-1.5 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {language.toLowerCase()}
          </span>
        </div>
        <CopyButton onClick={handleCopy} copied={copied} />
      </div>
      <HighlightedCode 
        code={children} 
        language={language} 
        theme={resolvedTheme} 
      />
    </div>
  );
};

export default memo(CodePre);