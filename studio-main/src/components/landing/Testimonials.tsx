import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';

const testimonials = [
  {
    quote: 'Joyeux turned our wedding into a dream celebration. Every detail was handled with such care and professionalism.',
    author: 'Anjali & Rohan',
  },
  {
    quote: 'Perfect food, perfect decor, and such lovely people to work with! Our guests are still talking about the sadya.',
    author: 'Priya & Sandeep',
  },
  {
    quote: 'The team went above and beyond to make our event special. We couldn\'t have asked for a better planner.',
    author: 'Meera & Arjun',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container">
        <AnimatedSection>
          <SectionHeading>Words From Our Clients</SectionHeading>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full flex flex-col justify-center text-center p-6 shadow-sm">
                <CardContent className="p-0">
                  <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground italic mb-4">
                    “{testimonial.quote}”
                  </p>
                  <p className="font-semibold text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
