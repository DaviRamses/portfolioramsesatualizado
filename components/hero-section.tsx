"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-foreground">Davi Ramses</span>
              <br />
              <span className="text-primary">Estrategista de Marketing</span>
              <br />
              <span className="text-foreground/90">Editor Audiovisual</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 text-pretty max-w-2xl mx-auto lg:mx-0">
              Visão 360º em Marketing e Automação com IA: Da Estratégia de Vendas à Execução em Meta Ads, Design e API.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onContactClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8"
              >
                Fale Comigo Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onContactClick}
                className="border-primary/50 hover:bg-primary/10 text-lg h-14 px-8 bg-transparent"
              >
                Contato
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Davi Ramses - Foto Profissional"
                  fill
                  className="object-cover object-right-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
