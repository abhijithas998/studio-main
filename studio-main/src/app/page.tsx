import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Menu } from '@/components/landing/Menu';
import { Services } from '@/components/landing/Services';
import { Gallery } from '@/components/landing/Gallery';
import { Testimonials } from '@/components/landing/Testimonials';
import { Footer } from '@/components/landing/Footer';
import { FloatingWhatsApp } from '@/components/landing/FloatingWhatsApp';
import { IntroGate } from '@/components/landing/IntroPreloader';
import { ScrollProgress } from '@/components/landing/ScrollProgress';

export default function Home() {
  return (
    <IntroGate>
      <div className="flex min-h-screen flex-col bg-background" id="main-content">
        <ScrollProgress />
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Menu />
          <Services />
          <Gallery />
          <Testimonials />
        </main>
        <section className="bg-secondary/50">
          <div className="container py-12 text-center">
            <h3 className="font-headline text-2xl font-semibold text-primary">Contact</h3>
            <div className="mt-4 flex flex-col items-center gap-2 text-muted-foreground">
              <a href="tel:+917902265603" className="hover:text-primary transition-colors">+91 7902265603</a>
              <a href="tel:+919048115078" className="hover:text-primary transition-colors">+91 9048115078</a>
            </div>
          </div>
        </section>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </IntroGate>
  );
}
