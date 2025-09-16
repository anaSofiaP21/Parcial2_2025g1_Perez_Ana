"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Menu, X, Smartphone, Globe, Headphones, Zap } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ServiciosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web modernos, responsivos y optimizados para SEO utilizando las últimas tecnologías como React, Next.js y Node.js.",
      icon: Globe,
      features: ["Diseño responsivo", "Optimización SEO", "Integración de APIs", "Panel de administración"],
      price: "Desde $2,500",
      image: "/javascript-code-editor.png",
    },
    {
      title: "Apps Móviles",
      description:
        "Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.",
      icon: Smartphone,
      features: ["iOS y Android", "UI/UX optimizada", "Integración con servicios", "Publicación en stores"],
      price: "Desde $5,000",
      image: "/placeholder.svg?key=mobile",
    },
    {
      title: "Consultoría",
      description:
        "Asesoramos a tu empresa en la transformación digital, arquitectura de software y mejores prácticas de desarrollo.",
      icon: Zap,
      features: ["Auditoría técnica", "Arquitectura de software", "Estrategia tecnológica", "Capacitación de equipos"],
      price: "Desde $150/hora",
      image: "/modern-coding-workspace-with-multiple-monitors.jpg",
    },
    {
      title: "Soporte",
      description:
        "Brindamos mantenimiento continuo, actualizaciones de seguridad y soporte técnico 24/7 para tus aplicaciones.",
      icon: Headphones,
      features: ["Soporte 24/7", "Actualizaciones de seguridad", "Monitoreo de rendimiento", "Backup automático"],
      price: "Desde $500/mes",
      image: "/diverse-group-of-programmers-collaborating-on-lapt.jpg",
    },
  ]

  const technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "PostgreSQL", color: "bg-blue-600" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Docker", color: "bg-blue-400" },
    { name: "TypeScript", color: "bg-blue-700" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/icono.jpg" alt="CoderHub Logo" className="h-8 w-8 rounded" />
              <span className="text-xl font-bold text-primary-foreground">CoderHub.run</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-primary-foreground hover:text-accent transition-colors">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-primary-foreground hover:text-accent transition-colors">
                Nosotros
              </Link>
              <Link
                href="/servicios"
                className="text-primary-foreground hover:text-accent transition-colors font-semibold"
              >
                Servicios
              </Link>
              <Link href="/portafolio" className="text-primary-foreground hover:text-accent transition-colors">
                Portafolio
              </Link>
              <Link href="/contacto" className="text-primary-foreground hover:text-accent transition-colors">
                Contacto
              </Link>
            </nav>

            <button className="md:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Ofrecemos soluciones tecnológicas completas para impulsar tu negocio hacia el futuro digital.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-on-scroll bg-card border-border overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">{service.price}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Características incluidas:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Solicitar Cotización
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Tecnologías que Dominamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Utilizamos las herramientas más modernas y confiables del mercado para garantizar soluciones robustas y
              escalables.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center hover-lift">
                <div className={`w-16 h-16 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <Code className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Seguimos una metodología probada que garantiza resultados exitosos en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis",
                description: "Entendemos tus necesidades y objetivos de negocio para definir la mejor estrategia.",
              },
              {
                step: "02",
                title: "Diseño",
                description: "Creamos prototipos y wireframes que reflejen la experiencia de usuario ideal.",
              },
              {
                step: "03",
                title: "Desarrollo",
                description: "Implementamos la solución utilizando las mejores prácticas y tecnologías modernas.",
              },
              {
                step: "04",
                title: "Entrega",
                description: "Desplegamos tu proyecto y brindamos capacitación para su uso y mantenimiento.",
              },
            ].map((process, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Conversemos sobre cómo podemos ayudarte a materializar tus ideas con soluciones tecnológicas de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg hover-lift">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portafolio">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
              >
                Ver Proyectos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
