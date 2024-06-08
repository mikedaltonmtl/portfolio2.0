'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center py-4 px-12 bg-bgLight fixed top-0 left-0 right-0 z-10 ${scrolled ? 'animate-jiggle' : ''}`}>
      <div className="flex gap-4 animate-slide-in-from-left">
        <Link href="https://www.linkedin.com" target="_blank">
          <i className="text-primary text-3xl fab fa-linkedin" />
        </Link>
        <Link href="https://github.com" target="_blank">
          <i className="text-primary text-3xl fab fa-github" />
        </Link>
        <Link href="https://discord.com" target="_blank">
          <i className="text-primary text-3xl fab fa-discord" />
        </Link>
      </div>
      <Link href="/contact" className="flex gap-2 items-center animate-slide-in-from-right">
        <i className="text-primary text-3xl fas fa-envelope" />
        <span className="text-primary">Contact</span>
      </Link>
    </nav>
  );
}
