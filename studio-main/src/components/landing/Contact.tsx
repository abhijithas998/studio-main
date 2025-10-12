
'use client';

import { useFormStatus } from 'react-dom';
import React, { useEffect, useState, useActionState } from 'react';
import { CalendarIcon, MapPin, Phone, Mail } from 'lucide-react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { submitContactForm, type FormState } from '@/lib/actions';
import { SectionHeading } from './SectionHeading';
import { AnimatedSection } from './AnimatedSection';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? 'Sending...' : 'Book Your Event'}
    </Button>
  );
}

export function Contact() {
  const initialState: FormState = { message: '', errors: {}, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  
  // Date state for the calendar picker
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        // celebratory subtle confetti via DOM API (no heavy deps)
        try {
          const burst = document.createElement('div');
          burst.className = 'pointer-events-none fixed inset-0 z-[90]';
          const fragment = document.createDocumentFragment();
          for (let i = 0; i < 40; i++) {
            const dot = document.createElement('span');
            dot.className = 'absolute block rounded-full bg-[#d4af37]';
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = '50%';
            dot.style.width = dot.style.height = 4 + Math.random() * 6 + 'px';
            dot.style.transform = 'translateY(0)';
            dot.style.opacity = '0.9';
            dot.style.transition = 'transform 900ms ease-out, opacity 900ms ease-out';
            fragment.appendChild(dot);
            requestAnimationFrame(() => {
              dot.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${-60 - Math.random() * 120}px)`;
              dot.style.opacity = '0';
            });
          }
          burst.appendChild(fragment);
          document.body.appendChild(burst);
          setTimeout(() => burst.remove(), 1100);
        } catch {}
        // Reset form fields on success
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
        setDate(undefined);
      } else {
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M16.003 4.413c-6.388 0-11.583 5.195-11.583 11.583c0 2.022.52 3.933 1.45 5.623L4 28l6.633-1.93c1.623.833 3.453 1.32 5.37 1.32c6.387 0 11.58-5.195 11.58-11.583c0-6.388-5.193-11.583-11.58-11.583zm0 21.083c-1.742 0-3.4-.44-4.888-1.253l-.35-.205l-3.63 1.06l1.08-3.54l-.23-.368c-.9-1.458-1.44-3.188-1.44-5.01c0-5.24 4.25-9.49 9.49-9.49c5.24 0 9.492 4.25 9.492 9.49c0 5.24-4.252 9.49-9.492 9.49zm5.29-6.86c-.282-.14-1.66-0.82-1.918-0.917c-.258-.098-.445-.14-.633.14c-.188.28-.724.916-.888 1.1c-.164.18-.33.197-.612.057c-1.428-.68-2.36-1.24-3.25-2.18c-1.12-1.17-1.8-2.4-2.1-3.2c-.18-.45.18-.7.4-.9c.15-.14.3-.25.4-.35c.13-.12.18-.2.25-.33c.09-.17.04-.31 0-.42c-.04-.1-.63-1.5-1-2c-.35-.5-.7-.4-1-.4h-.5c-.27 0-.7.1-1 .3c-.3.2-.8.8-1 1.7c-.2 1-.2 2.1.2 3.3c.4 1.2 1.3 2.5 2.8 4.1c2 2 3.8 3.3 5.8 4.2c2 1 3.2 1.1 4.3.8c1-.2 1.5-.7 1.8-1.2c.3-.5.3-1 .2-1.2c-.1-.2-.2-.3-.5-.4z"></path></svg>
  );

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container">
        <AnimatedSection>
          <SectionHeading subtitle="Ready to turn your dream event into a reality? Fill out the form below or contact us directly. We can't wait to hear from you.">
            Let's Plan Your Event
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <form id="contact-form" action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required />
                {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                 {state.errors?.phone && <p className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <Input id="eventType" name="eventType" placeholder="e.g., Wedding, Birthday" required />
                   {state.errors?.eventType && <p className="text-sm font-medium text-destructive">{state.errors.eventType[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Input type="hidden" name="date" value={date?.toISOString() || ''} />
                   {state.errors?.date && <p className="text-sm font-medium text-destructive">{state.errors.date[0]}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" name="message" placeholder="Tell us more about your event..." />
                 {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>

            <div className="space-y-6 rounded-lg bg-card p-8 shadow-sm">
              <h3 className="font-headline text-2xl font-semibold text-primary">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Neyyattinkara, Manchavilakam, Poovar</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+917902265603" className="hover:text-primary transition-colors">+91 7902265603</a><br/>
                    <a href="tel:+919048115078" className="hover:text-primary transition-colors">+91 9048115078</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <WhatsAppIcon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <a 
                    href="https://wa.me/917902265603" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
