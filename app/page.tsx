"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Car,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

const units = [
  {
    id: "unidade-centro",
    name: "Kapital",
    slug: "kapital",
    address: "Rua Ana Luiza de Souza , 613 - Pioneiros",
    phone: "(67) 3388-1003",
    hours: "Seg-Sex: 08:00-18:00 | Sáb: 08:00-12:00",
    image: "/kapital.webp",
    color: "from-red-800 to-red-950",
  },
  {
    id: "unidade-norte",
    name: "Felicidade",
    slug: "Felicidade",
    address: "Rua souto maior,443 - Tijuca",
    phone: "(67) 3028-4307",
    hours: "Seg-Sex: 08:00-18:00 | Sáb: 08:00-12:00",
    image: "/felicidade.jpeg",
    color: "from-red-800 to-red-950",
  },
  {
    id: "unidade-sul",
    name: "Jotta (Julio de Castilho)",
    slug: "jotta",
    address: "AV. Julio de Castilho, 3927 - Vila Coutinho",
    phone: "(67) 3029-9202",
    hours: "Seg-Sex: 08:00-18:00 | Sáb: 08:00-12:00",
    image: "/julio_de_castilho.jpeg",
    color: "from-red-800 to-red-950",
  },
  {
    id: "unidade-leste",
    name: "Jotta (Nova Lima)",
    slug: "jotta_Nava_Lima",
    address: "Rua Jerônimo de Albuquerque, 705 - Nova Lima",
    phone: "(67) 99244-3037",
    hours: "Seg-Sex: 08:00-18:00 | Sáb: 08:00-12:00",
    image: "/JOTTA.jpeg",
    color: "from-red-800 to-red-950",
  },
];

const features = [
  {
    icon: Car,
    title: "Frota Moderna",
    description: "Veículos novos e equipados com tecnologia de ponta",
  },
  {
    icon: Users,
    title: "Instrutores Qualificados",
    description: "Profissionais experientes e certificados",
  },
  {
    icon: Award,
    title: "Alta Taxa de Aprovação",
    description: "Mais de 80% de aprovação nos exames",
  },
  {
    icon: CheckCircle2,
    title: "Certificação Reconhecida",
    description: "Credenciamento DETRAN em todas as unidades",
  },
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">
                Grupo Jotta
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#unidades"
                className="text-foreground hover:text-primary transition-colors"
              >
                Unidades
              </Link>
              <Link
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </Link>
              <a href="#cta">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Contato
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            id="hero"
            data-animate
            className={`text-center transition-all duration-1000 ${
              isVisible["hero"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">
                🚗 Sua Habilitação Começa Aqui
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Conquiste sua{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                liberdade
              </span>{" "}
              de dirigir
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
              4 unidades estrategicamente localizadas para você. Instrutores
              qualificados, frota moderna e a melhor estrutura da região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cta">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 bg-transparent"
                onClick={() =>
                  document
                    .getElementById("unidades")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Unidades
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="sobre" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div
            id="features-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 delay-100 ${
              isVisible["features-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que escolher a gente?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Excelência em formação de condutores há mais de 18 anos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`transition-all duration-700 ${
                  isVisible[`feature-${index}`]
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section id="unidades" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div
            id="units-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["units-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossas Unidades
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Escolha a unidade mais próxima de você e comece sua{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Hoje Mesmo a sua CNH
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {units.map((unit, index) => (
              <div
                key={unit.id}
                id={unit.id}
                data-animate
                className={`transition-all duration-700 ${
                  isVisible[unit.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-primary/50">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                    <img
                      src={unit.image || "/placeholder.svg"}
                      alt={unit.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${unit.color} rounded-full`}
                    >
                      <span className="text-white font-bold text-sm">
                        {unit.name}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">
                          {unit.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{unit.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{unit.hours}</span>
                      </div>
                    </div>
                    <Link href={`/unidade/${unit.slug}`} className="block">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group/btn">
                        Ver Detalhes da Unidade
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-accent to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
              Pronto(a) para começar sua CNH?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudá-lo a
              conquistar sua habilitação
            </p>
            <a
              href="https://wa.me/5567992059340"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Fale Conosco Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            l
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
}
