"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Clock,
  ArrowLeft,
  Car,
  Users,
  Calendar,
  CreditCard,
  CheckCircle2,
  Mail,
  Navigation,
} from "lucide-react"

const unitsData: { [key: string]: any } = {
  kapital: {
    name: "Kapital",
    address: "Rua Ana Luiza de Souza , 613 - Pioneiros",
    city: "Campo Grande - MS",
    cep: "79070-140",
    phone: "(67) 992659778",
    email: "kapitalmatrizgerencia@gmail.com",
    hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00",
    image: "/kapital.webp",
    color: "from-black to-red-700",
    description:
      "Se torna única pelo atendimento, desde a recepção até o término do processo sempre com um ótimo atendimento, sempre prontos para tirar qualquer dúvida e fazer o processo mais tranquilo e menos burocrático.    Não enrolamos alunos, estamos aqui para atender da melhor forma, instrutores formados e capacitados para ensinar a dirigir de forma correta e não para enrolar o aluno.",
    maps: "https://www.google.com/maps?q=Rua+Ana+Luiza+de+Souza,+613",
    features: [
      "Salas climatizadas ",
      "Wi-fi disponível",
      "Televisão",
      "Café, chá e água",
      "Acessibilidade ",
      "Balizamento próprio",
      "Instrutores formado em libras",
    ],
    instructors: 12,
    vehicles: 11,
    courses: ["Primeira habilitação AB", "Carro Adaptado para PCD", "categoria D", "Categoria E", "Temos curso teórico próprio", "Formação e atualização de instrutor de trânsito"],
  },
  Felicidade: {
    name: "Felicidade",
    address: "Rua Souto maior 443 - Tijuca",
    city: "Campo Grande - MS",
    cep: "79094-560 ",
    phone: "(67) 99270-2436",
    email: "felicidadeautoescola@gmail.com",
    hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00",
    image: "/felicidade.jpeg",
    color: "from-black to-red-700",
    description:
      "A Unidade Norte oferece uma estrutura completa com pista interna para treinamento e frota renovada. Ideal para quem busca conforto e qualidade no aprendizado.",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Soulto+Maior,+443",
    features: [
      "Pista interna de treinamento",
      "Frota 2024",
      "Sala de espera confortável",
      "Lanchonete no local",
      "Área de convivência",
      "Sistema de agendamento online",
    ],
    instructors: 9,
    vehicles: 8,
    courses: ["Categoria A", "Categoria B", "Categoria AB", "Reciclagem", "Renovação", "Categoria C"],
  },
  jotta: {
    name: "jotta",
    address: "Av. julio de castilho, 3927 - Vila Coutinho",
    city: "Campo Grande - MS",
    cep: "79103-000",
    phone: "(67)99321-1603",
    email: "admmetemarcha@gmail.com",
    hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00",
    image: "/modern-car-driving-training-center.jpg",
    color: "from-black to-red-700",
    description:
      "Nossa Unidade Sul se destaca pela excelência no atendimento e infraestrutura moderna. Localizada em região nobre, oferece todo o conforto que você merece.",
    maps: "https://www.google.com/maps/search/?api=1&query=Av+Júlio+de+Castilho,+3927",
    features: [
      "Localização privilegiada",
      "Veículos de luxo disponíveis",
      "Atendimento personalizado",
      "Horários flexíveis",
      "Aulas VIP disponíveis",
      "Parceria com despachantes",
    ],
    instructors: 8,
    vehicles: 7,
    courses: ["Categoria A", "Categoria B", "Categoria AB", "Reciclagem", "Renovação", "Categoria D", "Categoria E"],
  },
  jotta_Nava_Lima: {
    name: "Jotta Nova Lima",
    address: "Rua Jerônimo de Albuquerque, 706 - Nova Lima",
    city: "Campo Grande - MS",
    cep: "79017-121",
    phone: "(67) 99244-3037",
    email: "autoescolajotta@gmail.com",
    hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00",
    image: "/Jotta.jpeg",
    color: "from-black to-red-700",
    description:
      " A melhor autoescola da região está aqui no Nova Lima! Somos a autoescola do povo, com preços acessíveis, qualidade no ensino e atendimento que faz a diferença. Aqui você aprende de verdade, sem pesar no bolso!",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Jerônimo+de+Albuquerque,+706",
    features: [
      "Unidade mais nova",
      "Tecnologia de ponta",
      "Realidade virtual para treinamento",
      "App exclusivo para alunos",
      "Pagamento facilitado",
      "Garantia de aprovação",
    ],
    instructors: 1,
    vehicles: 1,
    courses: ["Categoria A", "Categoria B", "Categoria AB", "Reciclagem", "Renovação", "Primeira Habilitação"],
  },
}

export default function UnitPage() {
  const params = useParams()
  const slug = params.slug as string
  const unit = unitsData[slug]
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Unidade não encontrada</h1>
          <Link href="/">
            <Button>Voltar para Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Grupo Jotta</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="relative h-96 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-40`} />
          <img src={unit.image || "/placeholder.svg"} alt={unit.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              id="hero"
              data-animate
              className={`text-center text-white transition-all duration-1000 ${isVisible["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">{unit.name}</h1>
              <p className="text-xl md:text-2xl drop-shadow-lg">{unit.city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <div
                id="description"
                data-animate
                className={`transition-all duration-1000 ${isVisible["description"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">Sobre a Unidade</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{unit.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-secondary/50 rounded-lg">
                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-3xl font-bold text-foreground">{unit.instructors}</div>
                        <div className="text-sm text-muted-foreground">Instrutores</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded-lg">
                        <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-3xl font-bold text-foreground">{unit.vehicles}</div>
                        <div className="text-sm text-muted-foreground">Veículos</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded-lg">
                        <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-3xl font-bold text-foreground">80%</div>
                        <div className="text-sm text-muted-foreground">Aprovação</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                id="features"
                data-animate
                className={`transition-all duration-1000 delay-200 ${isVisible["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Diferenciais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {unit.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                id="courses"
                data-animate
                className={`transition-all duration-1000 delay-300 ${isVisible["courses"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">principais serviços</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {unit.courses.map((course: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-semibold text-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div
                id="contact"
                data-animate
                className={`transition-all duration-1000 delay-100 ${isVisible["contact"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
              >
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground">{unit.address}</div>
                          <div className="text-sm text-muted-foreground">{unit.city}</div>
                          <div className="text-sm text-muted-foreground">CEP: {unit.cep}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a href={`tel:${unit.phone}`} className="text-foreground hover:text-primary transition-colors">
                          {unit.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`mailto:${unit.email}`}
                          className="text-foreground hover:text-primary transition-colors text-sm"
                        >
                          {unit.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="text-foreground text-sm leading-relaxed">{unit.hours}</div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <a href={`tel:${unit.phone}`}>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Phone className="mr-2 h-4 w-4" />
                        Ligar Agora
                      </Button>
                      </a>
                      <a
                        href={unit.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full bg-transparent">
                          <Navigation className="mr-2 h-4 w-4" />
                          Ver no Mapa
                        </Button>
                      </a>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 bg-gradient-to-br ${unit.color}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <div
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${isVisible["cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
              Pronto para começar suas aulas?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed">
              Entre em contato conosco e agende uma visita para conhecer nossa estrutura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${unit.phone}`} className="text-transparent  transition-colors">
                          {unit.phone}
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2 h-5 w-5" />
                Falar com Consultor
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
