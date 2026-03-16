import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Servicios from "@/components/servicios"
import Proceso from "@/components/proceso"
import Opiniones from "@/components/opiniones"
import PorQueElegir from "@/components/por-que-elegir"
import Contacto from "@/components/contacto"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <Servicios />
      <Proceso />
      <PorQueElegir />
      <Opiniones />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
