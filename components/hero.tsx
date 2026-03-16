import { MapPin, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-ReaZdqjzsoqg64qgJVPW6LUi7uNfnr.webp"
          alt="Audi en servicio en Lubricentro Germann"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/80" />
        {/* Left gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Red accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 pt-28 pb-20">
        <div className="max-w-xl">
          {/* Tag */}
          <span className="inline-block text-accent text-xs font-bold tracking-widest uppercase mb-5 border border-accent/30 px-3 py-1 rounded-sm">
            Av. Forest 950 · CABA
          </span>

          <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance mb-6">
            Cambio de aceite y mantenimiento{" "}
            <span className="text-primary">con atención profesional</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md">
            En Germann ofrecemos servicio de lubricación y mantenimiento para vehículos con
            atención personalizada, buenos precios y un servicio confiable que hace que
            nuestros clientes vuelvan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:01145553527"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3 rounded hover:opacity-90 transition-opacity text-sm uppercase tracking-wide"
            >
              <Phone size={16} />
              Llamar ahora
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Forest+950+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-accent/50 text-accent font-bold px-7 py-3 rounded hover:border-accent hover:bg-accent/10 transition-all text-sm uppercase tracking-wide"
            >
              <MapPin size={16} />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}
