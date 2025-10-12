import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';

const galleryImages = [
  { id: 'gallery-1', caption: 'Elegant Stage Decor' },
  { id: 'gallery-2', caption: 'Classic Kerala Setup' },
  { id: 'gallery-3', caption: 'Grand Wedding Reception' },
  { id: 'gallery-4', caption: 'Floral Archway' },
  { id: 'gallery-5', caption: 'Intricate Table Setting' },
  { id: 'gallery-6', caption: 'Traditional Serving Setup' },
];

export function Gallery() {
  const images = galleryImages.map(gi => {
    const placeholder = PlaceHolderImages.find(p => p.id === gi.id);
    return { ...gi, ...placeholder };
  });

  return (
    <section id="gallery" className="section-padding container">
      <AnimatedSection>
        <SectionHeading>Our Cherished Moments</SectionHeading>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <AnimatedSection key={image.id} delay={index * 100}>
            <div className="group relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
              {image.imageUrl && (
                <Image
                  src={image.imageUrl}
                  alt={image.description || image.caption}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white font-headline text-lg text-center">{image.caption}</p>
              </div>
              {/* Gold border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-[#d4af37]/0 transition-all duration-300 group-hover:ring-[3px] group-hover:ring-[#d4af37]/70 group-hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
