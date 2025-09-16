"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Menu, X, ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PortafolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const projects = [
    {
      title: "E-Commerce TechStore",
      description:
        "Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel administrativo.",
      image: "/react-components-interface.jpg",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      client: "TechStore Inc.",
      features: ["Carrito de compras", "Pagos seguros", "Panel admin", "Responsive design"],
    },
    {
      title: "App Móvil HealthTracker",
      description:
        "Aplicación móvil para seguimiento de salud y fitness con integración de wearables y análisis de datos.",
      image: "/placeholder.svg?key=health",
      category: "Móvil",
      technologies: ["React Native", "Firebase", "Node.js", "Chart.js"],
      year: "2024",
      client: "HealthTech Solutions",
      features: ["Seguimiento fitness", "Integración wearables", "Análisis de datos", "Notificaciones push"],
    },
    {
      title: "Sistema ERP Empresarial",
      description:
        "Sistema integral de planificación de recursos empresariales para gestión de inventarios, ventas y finanzas.",
      image: "/modern-coding-workspace-with-multiple-monitors.jpg",
      category: "Web",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      year: "2023",
      client: "Corporación ABC",
      features: ["Gestión inventarios", "Módulo ventas", "Reportes financieros", "Multi-usuario"],
    },
    {
      title: "Plataforma Educativa Online",
      description:
        "Plataforma de aprendizaje en línea con cursos interactivos, evaluaciones y seguimiento de progreso.",
      image: "/javascript-code-editor.png",
      category: "Web",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      year: "2023",
      client: "EduTech Academy",
      features: ["Cursos interactivos", "Sistema evaluaciones", "Progreso estudiantes", "Certificaciones"],
    },
  ]

  const categories = ["Todos", "Web", "Móvil", "Consultoría"]

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

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
              <Link href="/servicios" className="text-primary-foreground hover:text-accent transition-colors">
                Servicios
              </Link>
              <Link
                href="/portafolio"
                className="text-primary-foreground hover:text-accent transition-colors font-semibold"
              >
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
              Nuestro <span className="text-primary">Portafolio</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Descubre algunos de los proyectos exitosos que hemos desarrollado para nuestros clientes, desde
              aplicaciones web hasta soluciones móviles innovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover-lift animate-on-scroll bg-card border-border overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="hover-lift">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                      <CardDescription className="text-accent font-medium">Cliente: {project.client}</CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Características principales:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Ver Detalles del Proyecto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Resultados que Hablan por Sí Solos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Proyectos Completados", description: "Soluciones exitosas entregadas" },
              {
                number: "98%",
                label: "Satisfacción del Cliente",
                description: "Clientes satisfechos con nuestro trabajo",
              },
              { number: "50+", label: "Clientes Activos", description: "Empresas que confían en nosotros" },
              { number: "4.9/5", label: "Calificación Promedio", description: "Puntuación en plataformas de reseñas" },
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            ¿Listo para ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Únete a las empresas que ya han transformado sus ideas en soluciones tecnológicas exitosas con CoderHub.run.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg hover-lift">
                Iniciar mi Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
              >
                Ver Servicios
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
