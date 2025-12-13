'use client';

import { useRef, useEffect, useState } from 'react';
import styles from '@/components/ScrollFadeIn.module.css'

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.fadeInSection} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
