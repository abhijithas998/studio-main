import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PartyPopper,
  CupSoda,
  UsersRound,
  ClipboardCheck,
  Camera,
  Music,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    icon: <PartyPopper className="h-10 w-10 text-accent" />,
    title: 'Stage Decoration',
    description: 'Breathtaking stages that become the heart of your celebration.',
    imageId: 'service-stage',
  },
  {
    icon: <CupSoda className="h-10 w-10 text-accent" />,
    title: 'Welcome Drink',
    description: 'Refreshing and creative beverages to greet your guests.',
    imageId: 'service-drink',
  },
  {
    icon: <UsersRound className="h-10 w-10 text-accent" />,
    title: 'Serving Staff',
    description: 'Professional and courteous staff to ensure smooth service.',
    imageId: 'service-boys',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-accent" />,
    title: 'Catering Management',
    description: 'Flawless coordination for an unforgettable dining experience.',
    imageId: 'service-catering',
  },
  {
    icon: <Camera className="h-10 w-10 text-accent" />,
    title: 'Photography & Music',
    description: 'Capture every moment and set the perfect mood. (Add-on)',
    imageId: 'service-media',
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding container">
      <AnimatedSection>
        <SectionHeading>What We Offer</SectionHeading>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const image = PlaceHolderImages.find(p => p.id === service.imageId);
          return (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="text-center h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-secondary/40">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="pt-4 font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  {image?.imageUrl && (
                    <div className="mt-4 relative h-36 rounded-md overflow-hidden">
                      <Image src={image.imageUrl} alt={image.description || service.title} fill className="object-cover" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
