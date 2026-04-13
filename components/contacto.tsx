import { MapPin, Phone, Clock } from "lucide-react"

const horarios = [
  { dia: "Lunes – Viernes", hora: "8:30 a.m. – 7:00 p.m." },
  { dia: "Sábado", hora: "8:00 a.m. – 2:00 p.m." },
]

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 bg-primary rounded-full self-stretch min-h-[3rem] shrink-0" />
          <div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              Cómo encontrarnos
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-foreground mt-1 text-balance">
              Contacto y ubicación
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Dirección */}
            <div className="flex items-start gap-4">
              <span className="bg-primary/10 text-primary p-3 rounded-md shrink-0">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                  Dirección
                </p>
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Av. Forest 950
                </p>
                <p className="text-muted-foreground text-sm">
                  C1427 CEG, Ciudad Autónoma de Buenos Aires
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-4">
              <span className="bg-primary/10 text-primary p-3 rounded-md shrink-0">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                  Teléfono
                </p>
                <a
                  href="tel:01145553527"
                  className="text-foreground font-semibold text-lg hover:text-primary transition-colors"
                >
                  011 4555-3527
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex items-start gap-4">
              <span className="bg-primary/10 text-primary p-3 rounded-md shrink-0">
                <Clock size={20} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                  Horario
                </p>
                <ul className="flex flex-col divide-y divide-border">
                  {horarios.map(({ dia, hora }) => (
                    <li key={dia} className="flex justify-between py-2">
                      <span className="text-foreground text-sm font-medium">{dia}</span>
                      <span
                        className={`text-sm ${
                          hora === "Cerrado"
                            ? "text-muted-foreground"
                            : "text-accent font-semibold"
                        }`}
                      >
                        {hora}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:01145553527"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity text-sm uppercase tracking-wide"
              >
                <Phone size={15} />
                Llamar
              </a>
              <a
                href="https://maps.google.com/?q=Av.+Forest+950+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-accent/50 text-accent font-bold px-6 py-3 rounded hover:bg-accent/10 transition-all text-sm uppercase tracking-wide"
              >
                <MapPin size={15} />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden border border-border aspect-video lg:aspect-auto lg:min-h-[400px]">
            <iframe
              title="Mapa Lubricentro Germann"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.6!2d-58.4613!3d-34.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58b91dddddd%3A0x0!2sAv.+Forest+950%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contrast-125 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
