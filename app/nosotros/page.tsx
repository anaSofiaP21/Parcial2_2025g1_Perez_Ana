"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Menu, X, Target, Eye, Heart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function NosotrosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const teamMembers = [
    {
      name: "Ana Pérez",
      role: "CEO & Fundadora",
      description:
        "Ingeniera de Software con 10+ años de experiencia en desarrollo de aplicaciones empresariales y liderazgo de equipos técnicos.",
      image: "/foto.png",
    },
    {
      name: "Carlos Rodríguez",
      role: "CTO",
      description:
        "Experto en arquitectura de software y tecnologías cloud. Especialista en escalabilidad y optimización de sistemas.",
      image: "/professional-male-developer.jpg",
    },
    {
      name: "María González",
      role: "Lead Developer",
      description:
        "Full-stack developer especializada en React, Node.js y bases de datos. Apasionada por el código limpio y las mejores prácticas.",
      image: "/professional-female-developer.jpg",
    },
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
              <Link
                href="/nosotros"
                className="text-primary-foreground hover:text-accent transition-colors font-semibold"
              >
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
              Conoce a <span className="text-primary">CoderHub.run</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Somos una casa de desarrollo de software comprometida con la innovación, la calidad y el éxito de nuestros
              clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CoderHub.run nació en 2020 con una visión clara: democratizar el acceso a soluciones tecnológicas de
                  alta calidad para empresas de todos los tamaños. Fundada por un equipo de ingenieros apasionados por
                  la tecnología, comenzamos como un pequeño estudio de desarrollo trabajando desde casa.
                </p>
                <p>
                  En nuestros primeros años, nos enfocamos en proyectos web para startups locales, construyendo una
                  reputación sólida basada en la entrega puntual, código limpio y atención personalizada. Cada proyecto
                  nos enseñó algo nuevo y nos ayudó a refinar nuestros procesos.
                </p>
                <p>
                  Hoy, cuatro años después, hemos crecido hasta convertirnos en una casa de desarrollo reconocida,
                  habiendo completado más de 150 proyectos exitosos para clientes en América Latina y Estados Unidos.
                  Nuestro equipo ha crecido, pero mantenemos los mismos valores que nos definieron desde el inicio.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/modern-coding-workspace-with-multiple-monitors.jpg"
                alt="Oficina de CoderHub.run"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Nuestros Principios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar ideas en soluciones tecnológicas innovadoras que impulsen el crecimiento y éxito de
                  nuestros clientes, utilizando las mejores prácticas de desarrollo y tecnologías de vanguardia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la casa de desarrollo de software líder en América Latina, reconocida por nuestra excelencia
                  técnica, innovación constante y el impacto positivo que generamos en los negocios de nuestros
                  clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>
                    • <strong>Calidad:</strong> Excelencia en cada línea de código
                  </li>
                  <li>
                    • <strong>Innovación:</strong> Siempre a la vanguardia tecnológica
                  </li>
                  <li>
                    • <strong>Transparencia:</strong> Comunicación clara y honesta
                  </li>
                  <li>
                    • <strong>Compromiso:</strong> Dedicación total a cada proyecto
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conoce a los profesionales apasionados que hacen posible cada proyecto exitoso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Descubre cómo podemos ayudarte a llevar tu proyecto al siguiente nivel con nuestras soluciones tecnológicas
            innovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg hover-lift">
                Contáctanos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portafolio">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
              >
                Ver Portafolio
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
