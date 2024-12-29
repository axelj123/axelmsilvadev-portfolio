'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleClick = () => {
    if (theme === 'light') setTheme('dark'); // Cambia entre light y dark
    if (theme === 'dark') setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="text-xs bg-foreground text-background rounded size-7 animate-pulse" />
    );
  }

  return (
    <button
      className="p-2 rounded-full text-start"
      onClick={handleClick}
      aria-label='Cambiar tema'
    >
      {theme === 'dark' ? (
        // Ícono de Luna
        <svg className="w-6 h-6 inline-block mr-2 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        // Ícono de Sol
        <svg className="w-6 h-6 inline-block mr-2 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.752 15.002C20.5633 15.4975 19.2879 15.7517 18 15.75C13.5817 15.75 10 12.1683 10 7.75C10.0025 6.46279 10.2567 5.18786 10.752 4C5.79 4.95 2 9.25 2 14.438C2 19.625 6.313 23.938 11.5 23.938C16.688 23.938 20.988 20.148 21.938 15.186C21.878 15.124 21.815 15.064 21.752 15.002Z" />
        </svg>
      )}
    </button>
  );
};
