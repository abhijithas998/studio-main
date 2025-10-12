"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-white perspective-1000">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover will-change-transform" 
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60 golden-gradient-overlay" />
      <div className="relative z-10 text-center p-4" onMouseMove={(e) => {
        const root = (e.currentTarget.parentElement as HTMLElement);
        const rect = root.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        root.style.setProperty('--tiltX', String(y * -6));
        root.style.setProperty('--tiltY', String(x * 6));
      }}
      style={{ transform: 'rotateX(var(--tiltX,0deg)) rotateY(var(--tiltY,0deg))', transition: 'transform 200ms ease-out' }}>
        <h1 className="font-script text-7xl md:text-9xl text-white drop-shadow-lg">
          Joyeux
        </h1>
        <p className="mt-2 text-lg md:text-2xl font-light tracking-widest uppercase text-cream-100">
          Memories made for you
        </p>
        <p className="mt-8 text-xl md:text-2xl font-bold uppercase tracking-wider">
          Wedding Planner & Events
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#contact">Book Your Event</Link>
        </Button>
      </div>
    </section>
  );
}
