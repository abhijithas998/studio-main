'use client';

import React, { useEffect, useState } from 'react';

type Petal = { left: string; size: number; delay: string; duration: string };

export function FloatingPetals({ count = 12 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const created = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      size: 6 + Math.floor(Math.random() * 10),
      delay: `${Math.random() * 4}s`,
      duration: `${8 + Math.random() * 10}s`,
    }));
    setPetals(created);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute -top-10 block rounded-full bg-[#d4af37]/30 shadow-[0_0_6px_rgba(212,175,55,0.3)] animate-fall"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />)
      )}
    </div>
  );
}



