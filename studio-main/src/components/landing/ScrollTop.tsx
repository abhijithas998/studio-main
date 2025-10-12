'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ background: 'linear-gradient(135deg,#d4af37,#e3c561)' }}
    >
      <span className="block p-3 text-background">
        <ArrowUp className="h-5 w-5" />
      </span>
    </button>
  );
}


