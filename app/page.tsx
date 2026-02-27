import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Pricing } from "@/components/pricing";
import { Location } from "@/components/location";
import { ContactForm } from "@/components/contact-form";
import { WhatsappButton } from "@/components/whatsapp-button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-dark-900 text-dark-50">
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Location />
      <ContactForm />

      <Footer />
      <WhatsappButton />
    </main>
  );
}
