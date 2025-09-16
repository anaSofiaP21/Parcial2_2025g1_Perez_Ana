"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/icono.jpg" alt="CoderHub Logo" className="h-8 w-8 rounded" />
              <span className="text-xl font-bold text-primary-foreground">CoderHub.run</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-primary-foreground hover:text-accent transition-colors font-semibold">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-primary-foreground hover:text-accent transition-colors">
                Nosotros
              </Link>
              <Link href="/servicios" className="text-primary-foreground hover:text-accent transition-colors">
                Servicios
              </Link>
              <Link href="/portafolio" className="text-primary-foreground hover:text-accent transition-colors">
                Portafolio
              </Link>
              <Link href="/contacto" className="text-primary-foreground hover:text-accent transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary border-t border-primary-foreground/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors">
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                >
                  Nosotros
                </Link>
                <Link
                  href="/servicios"
                  className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                >
                  Servicios
                </Link>
                <Link
                  href="/portafolio"
                  className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                >
                  Portafolio
                </Link>
                <Link
                  href="/contacto"
                  className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"
          style={{
            backgroundImage: `url('/modern-coding-workspace-with-multiple-monitors.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Innovación y <span className="text-primary">Tecnología</span> a tu{" "}
                <span className="text-accent">Alcance</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                CoderHub.run es tu socio estratégico en desarrollo de software. Creamos soluciones tecnológicas
                innovadoras que impulsan el crecimiento de tu negocio con calidad y confiabilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg hover-lift"
                  >
                    Contáctanos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg hover-lift bg-transparent"
                  >
                    Ver Servicios
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="/diverse-group-of-programmers-collaborating-on-lapt.jpg"
                  alt="Equipo de desarrollo CoderHub"
                  className="rounded-lg shadow-2xl hover-lift"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-card-foreground">Proyectos exitosos: +150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/icono.jpg" alt="CoderHub Logo" className="h-8 w-8 rounded" />
                <span className="text-xl font-bold">CoderHub.run</span>
              </div>
              <p className="text-primary-foreground/80 text-pretty">
                Casa de desarrollo de software innovadora y confiable, especializada en soluciones tecnológicas de
                vanguardia para empresas modernas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/servicios" className="hover:text-accent transition-colors">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-accent transition-colors">
                    Apps Móviles
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-accent transition-colors">
                    Consultoría
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-accent transition-colors">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ info@coderhub.run</li>
                <li>📍 Tech District, Innovation Ave 123</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 CoderHub.run. Todos los derechos reservados. Innovación tecnológica de calidad.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
