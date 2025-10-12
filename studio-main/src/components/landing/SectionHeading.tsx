import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionHeading({ children, className, subtitle }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-primary inline-block relative">
        {children}
        <span className="block h-[3px] w-0 bg-gradient-to-r from-[#d4af37] to-[#e3c561] mt-2 mx-auto animate-underline" />
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
