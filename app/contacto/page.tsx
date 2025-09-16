"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Menu, X, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: any = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = "El correo no es válido"
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es requerido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.")
      setFormData({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

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
              <Link href="/portafolio" className="text-primary-foreground hover:text-accent transition-colors">
                Portafolio
              </Link>
              <Link
                href="/contacto"
                className="text-primary-foreground hover:text-accent transition-colors font-semibold"
              >
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
              <span className="text-primary">Contáctanos</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a convertir tus ideas en realidad. Conversemos
              sobre cómo podemos impulsar tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={errors.nombre ? "border-red-500" : ""}
                    />
                    {errors.nombre && <p className="text-sm text-red-500">{errors.nombre}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="correo">Correo Electrónico *</Label>
                    <Input
                      id="correo"
                      name="correo"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.correo}
                      onChange={handleInputChange}
                      className={errors.correo ? "border-red-500" : ""}
                    />
                    {errors.correo && <p className="text-sm text-red-500">{errors.correo}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className={errors.asunto ? "border-red-500" : ""}
                    />
                    {errors.asunto && <p className="text-sm text-red-500">{errors.asunto}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos más detalles sobre tu proyecto..."
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className={errors.mensaje ? "border-red-500" : ""}
                    />
                    {errors.mensaje && <p className="text-sm text-red-500">{errors.mensaje}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                  <CardDescription>Múltiples formas de ponerte en contacto con nosotros.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Teléfono</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@coderhub.run</p>
                      <p className="text-sm text-muted-foreground">Respuesta en menos de 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Ubicación</h3>
                      <p className="text-muted-foreground">Tech District</p>
                      <p className="text-muted-foreground">Innovation Ave 123, Suite 456</p>
                      <p className="text-muted-foreground">Ciudad Tech, TC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horarios</h3>
                      <p className="text-muted-foreground">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sábados: 10:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Domingos: Cerrado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Contacto Rápido</CardTitle>
                  <CardDescription>¿Necesitas una respuesta inmediata?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar Ahora
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Nuestra Ubicación</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Visítanos en nuestras oficinas en el corazón del distrito tecnológico.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover-lift">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959687750!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de CoderHub.run"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Preguntas Frecuentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Cuánto tiempo toma desarrollar un proyecto?",
                answer:
                  "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden requerir 2-6 meses. Siempre proporcionamos un cronograma detallado antes de comenzar.",
              },
              {
                question: "¿Ofrecen soporte después del lanzamiento?",
                answer:
                  "Sí, ofrecemos diferentes planes de soporte y mantenimiento. Incluimos 30 días de soporte gratuito después del lanzamiento, y tenemos planes mensuales para soporte continuo, actualizaciones y mejoras.",
              },
              {
                question: "¿Trabajan con empresas de todos los tamaños?",
                answer:
                  "Absolutamente. Trabajamos con startups, pequeñas empresas, medianas empresas y corporaciones. Adaptamos nuestros servicios y metodologías según las necesidades y presupuesto de cada cliente.",
              },
              {
                question: "¿Qué tecnologías utilizan?",
                answer:
                  "Utilizamos tecnologías modernas y probadas como React, Next.js, Node.js, Python, MongoDB, PostgreSQL, AWS, y muchas más. Seleccionamos la mejor tecnología para cada proyecto específico.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
