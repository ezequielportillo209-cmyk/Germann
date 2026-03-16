"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 font-sans">
          <span className="text-primary font-black text-xl tracking-tight uppercase">Germann</span>
          <span className="hidden sm:block text-muted-foreground text-xs tracking-widest uppercase border-l border-border pl-2">
            Lubricentro
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:01145553527"
            className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Llamar ahora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          className="md:hidden text-foreground p-1"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-card border-b border-border px-5 pb-5">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:01145553527"
                className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded w-full text-center"
              >
                Llamar ahora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
