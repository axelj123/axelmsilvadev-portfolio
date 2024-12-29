"use client";
import { TOC } from 'react-markdown-toc/client';
import { useEffect, useState } from 'react';

export default function CustomTOC({ toc }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        rootMargin: '-50px 0px -50% 0px', 
        threshold: 0.5, 
      }
    );

    // Observa todos los encabezados h2, h3
    const headers = document.querySelectorAll('h2, h3');
    headers.forEach((header) => {
      const id = header.id;
      if (id) {
        observer.observe(header);
      }
    });

    return () => {
      observer.disconnect(); 
    };
  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth', 
      });

      setActiveId(id); 
      history.pushState(null, null, `#${id}`); 
    }
  };

  const getIndentLevel = (href) => {
    if (href.includes('paso') || href.includes('ejemplo')) {
      return 'ml-4';
    }
    if (href.includes('requisitos')) {
      return 'ml-2';
    }
    return '';
  };

  const generateId = (text) => {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') 
      .replace(/[^a-z0-9]+/g, '-') 
      .replace(/^-+|-+$/g, ''); 
  };

  return (
    <nav className="sticky top-24 w-64 px-4 max-h-[calc(100vh-6rem)] overflow-y-auto hidden lg:block my-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100  text-start">
        Table of contents
      </h2>
      <TOC
        toc={toc}
        scrollAlign="start"
        throttleTime={100}
        renderList={(children) => <div className="flex flex-col gap-2 ml-4">{children}</div>}
        renderListItem={(children) => <div className="flex flex-col">{children}</div>}
        renderLink={(children, href, active) => {
          const id = generateId(children);
          const isActive = id === activeId; 

          return (
            <div className="flex">
              <a
                href={`#${id}`} 
                onClick={(e) => {
                  e.preventDefault(); 
                  handleScroll(id); 
                }}
                className={`
                  text-left px-2 py-1.5 text-sm rounded-md transition-colors duration-300 ease-in-out 
                  hover:text-black hover:dark:text-white 
                  ${isActive ? 'text-[#167ff4]' : 'text-[#8c8c8c]'} 
                  ${getIndentLevel(href)} 
                
                `}


              >
                {children}
              </a>



            </div>
          );
        }}
      />
    </nav>
  );
}