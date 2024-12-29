'use client';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useMemo } from 'react';

const ScrollReveal = ({
  children,
  className = '',
  threshold = 0.1,
  duration = 1000,
  direction = 'bottom',
  delay = 0,
  hiddenBeforeScroll = false,
  offset = 100, // Nuevo prop para manejar el offset del header
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const directionClasses = useMemo(() => ({
    top: 'translate-y-[-50px]',
    bottom: 'translate-y-[50px]',
    left: 'translate-x-[-50px]',
    right: 'translate-x-[50px]',
  }), []);

  // Efecto para el montaje inicial
  useEffect(() => {
    setIsMounted(true);
    // Verificar si el elemento ya está en la vista al cargar
    const checkInitialVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight - offset) {
          setIsVisible(true);
        }
      }
    };
    
    checkInitialVisibility();
  }, [offset]);

  useEffect(() => {
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calcular si el elemento está realmente visible considerando el offset
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          const isReallyVisible = rect.top <= windowHeight - offset;
          
          if (isReallyVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      },
      {
        threshold,
        rootMargin: `-${offset}px 0px 0px 0px`, // Ajustar el margen superior según el offset
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Limpiar observer
    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [threshold, offset]);

  // Manejar el scroll manualmente para casos edge
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight - offset) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, offset]);

  const transformClass = isMounted ? 
    (isVisible ? 'opacity-100 translate-y-0' : `${directionClasses[direction]} opacity-0`) : 
    'opacity-0';

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${className} ${transformClass}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  threshold: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  delay: PropTypes.number,
  hiddenBeforeScroll: PropTypes.bool,
  offset: PropTypes.number, // Nuevo prop para el offset
};

ScrollReveal.defaultProps = {
  className: '',
  threshold: 0.1,
  duration: 1000,
  direction: 'bottom',
  delay: 0,
  hiddenBeforeScroll: false,
  offset: 100, // Valor por defecto del offset
};

export default ScrollReveal;