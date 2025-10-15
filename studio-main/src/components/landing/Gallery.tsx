import Image from 'next/image';
import { galleryAssets } from '@/lib/gallery-assets';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function Gallery() {
  const images = galleryAssets;

  return (
    <section id="gallery" className="section-padding container">
      <AnimatedSection>
        <SectionHeading>Our Cherished Moments</SectionHeading>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={img}
                      alt={`Cherished moment ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-[#d4af37]/0 transition-all duration-300 hover:ring-[3px] hover:ring-[#d4af37]/70 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </AnimatedSection>
    </section>
  );
}
