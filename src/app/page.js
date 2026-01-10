import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import FloatingCallButton from './components/FloatingCallButton';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
      <FloatingCallButton />
      <FloatingWhatsApp />
    </>
  );
}