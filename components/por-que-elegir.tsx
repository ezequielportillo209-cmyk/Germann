import { Users, ThumbsUp, Repeat2, ShieldCheck, Star } from "lucide-react"

const razones = [
  {
    icon: Users,
    title: "Atención personalizada",
    desc: "Cada cliente recibe atención directa y honesta, con recomendaciones pensadas para su bolsillo.",
  },
  {
    icon: ThumbsUp,
    title: "Excelente relación precio-calidad",
    desc: "Trabajamos con productos de calidad a precios justos, sin sorpresas al momento de pagar.",
  },
  {
    icon: Repeat2,
    title: "Clientes que vuelven",
    desc: "La mayoría de nuestros clientes repiten. Eso habla mejor que cualquier publicidad.",
  },
  {
    icon: ShieldCheck,
    title: "Lubricentro de confianza",
    desc: "Años de experiencia en la zona, con una reputación construida sobre la honestidad.",
  },
  {
    icon: Star,
    title: "Servicio profesional",
    desc: "Nuestro equipo conoce cada vehículo que entra al taller y lo trata con el cuidado que merece.",
  },
]

export default function PorQueElegir() {
  return (
    <section id="porque" className="py-24 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              Por qué elegirnos
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-foreground mt-2 mb-6 text-balance">
              Más de 30 años de confianza en la zona
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En Lubricentro Germann nos especializamos en brindar el mejor servicio de
              lubricación y mantenimiento en CABA. Nuestra trayectoria habla por sí sola.
            </p>
            <ul className="flex flex-col gap-5">
              {razones.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-0.5 bg-primary/10 text-primary p-2 rounded-md shrink-0">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-bold text-foreground text-sm">{title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: images */}
          <div className="flex flex-col gap-4 order-first lg:order-last">
            {/* Primera Imagen */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="/germann1.jpeg"
                alt="Exterior del Lubricentro Germann"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-bold text-sm">Lubricentro Germann</p>
                <p className="text-gray-300 text-xs">Av. Forest 950 · CABA</p>
              </div>
            </div>

            {/* Segunda Imagen */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="/germann2.jpeg" // Asegúrate de que el nombre del archivo sea correcto
                alt="Interior del taller Lubricentro Germann"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-bold text-sm">Nuestro Servicio</p>
                <p className="text-gray-300 text-xs">Personal experto en la materia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}