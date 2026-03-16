import { Droplets, Filter, ClipboardCheck, Gauge, Wrench, Zap } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Cambio de aceite",
    desc: "Reemplazamos el aceite de motor por uno nuevo, adecuado a las especificaciones de tu vehículo.",
  },
  {
    icon: Filter,
    title: "Cambio de filtro de aceite",
    desc: "Instalamos filtros de calidad para proteger el motor y alargar su vida útil.",
  },
  {
    icon: ClipboardCheck,
    title: "Revisión general",
    desc: "Revisión completa del estado general del vehículo para detectar cualquier anomalía.",
  },
  {
    icon: Gauge,
    title: "Control de fluidos",
    desc: "Verificamos niveles de refrigerante, frenos, dirección y demás fluidos esenciales.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento del motor",
    desc: "Servicio básico de mantenimiento para mantener el motor en óptimas condiciones.",
  },
  {
    icon: Zap,
    title: "Servicio de lubricación",
    desc: "Lubricación integral de todos los componentes que lo requieren para un funcionamiento suave.",
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 bg-primary rounded-full self-stretch min-h-[3rem] shrink-0" />
          <div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              Lo que hacemos
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-foreground mt-1 text-balance">
              Nuestros servicios
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md leading-relaxed">
              Trabajamos con atención profesional buscando siempre la mejor relación entre
              precio y calidad para el cliente.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary p-2 rounded-md">
                  <Icon size={20} />
                </span>
                <h3 className="font-sans font-bold text-foreground text-base">{title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
