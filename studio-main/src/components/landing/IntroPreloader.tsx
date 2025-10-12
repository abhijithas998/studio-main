'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type IntroGateProps = {
  children: React.ReactNode;
  minimumDurationMs?: number;
};

/**
 * IntroGate shows a cinematic logo intro, then reveals children with a fade in.
 */
export function IntroGate({ children, minimumDurationMs = 3000 }: IntroGateProps) {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    const startFade = window.setTimeout(() => setIsFadingOut(true), minimumDurationMs);
    const finish = window.setTimeout(() => {
      setIsIntroVisible(false);
      body.style.overflow = previousOverflow || '';
    }, minimumDurationMs + 700);

    return () => {
      window.clearTimeout(startFade);
      window.clearTimeout(finish);
      body.style.overflow = previousOverflow || '';
    };
  }, [minimumDurationMs]);

  // Generate particle positions only on client after mount to avoid SSR randomness
  useEffect(() => {
    const count = 14;
    const created = Array.from({ length: count }).map(() => {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 2}s`;
      const duration = `${5 + Math.random() * 6}s`;
      return { left, top, delay, duration };
    });
    setParticles(created);
  }, []);

  return (
    <>
      {/* Content gate with smooth reveal */}
      <div className={cn('transition-opacity duration-700', isIntroVisible ? 'opacity-0' : 'opacity-100')}>
        {children}
      </div>

      {/* Fullscreen cinematic intro */}
      {isIntroVisible && (
        <div
          className={cn(
            'fixed inset-0 z-[100] flex items-center justify-center',
            'bg-[radial-gradient(ellipse_at_center,_#fff5e1_0%,_#fff0d6_60%,_#ffe8c2_100%)]',
            'transition-opacity duration-700',
            isFadingOut && 'opacity-0 pointer-events-none'
          )}
        >
          {/* Decorative particles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((p, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-[#d4af37]/70 animate-petal"
                style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
              />
            ))}
          </div>

          <div className="relative text-center">
            <div className="relative inline-block">
              {/* Gold shimmer overlay */}
              <span className="pointer-events-none absolute inset-0 shimmer-mask" />
              <h1 className="font-script text-[64px] sm:text-[84px] md:text-[112px] leading-none text-[#d4af37] drop-shadow-md animate-pop">
                Joyeux
              </h1>
            </div>
            <p className="mt-4 font-headline text-base sm:text-lg md:text-xl text-[#800000] opacity-0 animate-fade-up">
              Memories made for you
            </p>
          </div>
        </div>
      )}
    </>
  );
}


