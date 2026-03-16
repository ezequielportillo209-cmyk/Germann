const pasos = [
  {
    num: "01",
    title: "Revisión inicial",
    desc: "Revisamos el estado del aceite y filtros del vehículo para determinar qué necesita.",
  },
  {
    num: "02",
    title: "Cambio de aceite y filtro",
    desc: "Realizamos el cambio de aceite y el filtro correspondiente con productos de calidad.",
  },
  {
    num: "03",
    title: "Control de fluidos",
    desc: "Control general de fluidos y chequeo básico del estado general del vehículo.",
  },
  {
    num: "04",
    title: "Entrega del vehículo",
    desc: "Entregamos el vehículo con el mantenimiento completo, listo para seguir rodando.",
  },
]

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="py-24 bg-card border-y border-border relative overflow-hidden"
    >
      {/* Background image accent */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-n8prWYwwJpNlHJtLAT9PUjNXUekTWc.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-1 bg-primary rounded-full self-stretch min-h-[3rem] shrink-0" />
          <div>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              El proceso
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-foreground mt-1 text-balance">
              Cómo es el service
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, i) => (
            <div key={paso.num} className="relative flex flex-col gap-4">
              {/* Connector line (desktop) */}
              {i < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%_-_1rem)] w-[calc(100%_-_2rem)] h-px bg-border z-0" />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <span className="font-black text-3xl text-primary leading-none">{paso.num}</span>
                <div className="flex-1 h-px bg-primary/30" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-base">{paso.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
