import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';

const sadyaItems = [
  'Chips', 'Upperi', 'Pazham', 'Pappadam', 'Inji', 'Naranga', 'Manga', 'Kichadi',
  'Thoran', 'Aviyal', 'Kootukari', 'Olan', 'Rice', 'Parippu', 'Sambar', 'Rasam',
  'Mor', 'Payasam (Ada)', 'Payasam (Kadala)', 'Payasam (Semiya)', 'Payasam (Boondi)'
];

export function Menu() {
  return (
    <section id="menu" className="section-padding bg-secondary/50">
      <div className="container">
        <AnimatedSection>
          <SectionHeading>A Taste of Tradition</SectionHeading>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sadyaItems.map((item, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="p-1">
                    <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-accent/20 hover:shadow-lg">
                      <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="text-base md:text-lg font-medium text-center">{item}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </AnimatedSection>
        <AnimatedSection delay={400}>
            <p className="mt-12 text-center text-lg font-semibold text-primary bg-accent/20 p-4 rounded-lg border border-accent">
                Starting from Rs.160 per head (Minimum 1000 Nos)
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
