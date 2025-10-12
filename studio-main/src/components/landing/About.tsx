import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <section id="about" className="section-padding container">
      <AnimatedSection>
        <SectionHeading>We Make Your Special Day Truly Memorable</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              At Joyeux, we believe that every celebration should be a reflection of your unique story. With a passion for perfection and a deep appreciation for tradition, we specialize in crafting unforgettable Kerala weddings and events. Our dedicated team is here to bring your vision to life, ensuring every detail is flawlessly executed.
            </p>
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary mb-3">Our Core Services</h3>
              <p className="text-muted-foreground">
                We provide a comprehensive suite of services to cover all your event needs, including: <span className="font-medium text-foreground">event planning, catering, decoration, professional serving staff, and customized stage design.</span>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
