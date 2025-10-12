import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Menu } from '@/components/landing/Menu';
import { Services } from '@/components/landing/Services';
import { Gallery } from '@/components/landing/Gallery';
import { Testimonials } from '@/components/landing/Testimonials';
import { Contact } from '@/components/landing/Contact';
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
          <Contact/>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </IntroGate>
  );
}
