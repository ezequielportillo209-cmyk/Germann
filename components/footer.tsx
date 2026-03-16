export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-primary font-black text-lg tracking-tight uppercase">Germann</span>
          <span className="text-muted-foreground text-xs tracking-widest uppercase border-l border-border pl-2">
            Lubricentro
          </span>
        </div>
        <p className="text-muted-foreground text-xs text-center">
          Av. Forest 950 · CABA · Tel: 011 4555-3527
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Lubricentro Germann
        </p>
      </div>
    </footer>
  )
}
