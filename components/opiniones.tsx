import { Star } from "lucide-react"

const opiniones = [
  {
    nombre: "Diego Palacios",
    texto: "Impecable la atención. Cambio de aceite y filtro y limpieza final.",
  },
  {
    nombre: "Natalia Tagliavini",
    texto:
      "Excelente la atención y el servicio de Germán. Es la segunda vez que llevo el auto y voy a volver siempre.",
  },
  {
    nombre: "Khaled Ghadir",
    texto: "Excelente servicio y atención.",
  },
  {
    nombre: "Cobranzas Publicitarias",
    texto:
      "Juan y Germán unos cracks. Profesionales y buena gente. Te recomiendan cuidándote el bolsillo. Absolutamente recomendables.",
  },
  {
    nombre: "Flavia Barisonzi",
    texto: "Mi visita anual obligatoria. El mejor lugar por atención, precio y calidad.",
  },
  {
    nombre: "Matías Pablo",
    texto: "La mejor atención de Germán, buenos precios y atención personalizada.",
  },
  {
    nombre: "Gaxtoon Meza",
    texto: "Un lujo la atención y los precios. Germán un capo. Más que recomendable.",
  },
  {
    nombre: "Laura Limardo",
    texto: "Excelente atención y buenos precios. Lo recomiendo.",
  },
  {
    nombre: "Roger Wepfer",
    texto:
      "Excelente lubricentro, el mejor de la zona. Muy buena atención y excelente relación precio calidad.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="fill-primary text-primary" />
      ))}
    </div>
  )
}

export default function Opiniones() {
  return (
    <section id="opiniones" className="py-24 bg-[#7a6d3f]">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 bg-primary rounded-full self-stretch min-h-[3rem] shrink-0" />
          <div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              Testimonios
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-foreground mt-1 text-balance">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {opiniones.map((op) => (
            <div
              key={op.nombre}
              className="break-inside-avoid bg-card border border-border rounded-lg p-5 flex flex-col gap-3"
            >
              <Stars />
              <p className="text-foreground text-sm leading-relaxed">{`"${op.texto}"`}</p>
              <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wide border-t border-border pt-3">
                {op.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
