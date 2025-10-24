"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Mail } from "lucide-react"

interface FooterProps {
  onContactClick: () => void
}

export function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="relative py-16 px-4 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Pronto para <span className="text-primary">Transformar seu Negócio?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 text-pretty max-w-2xl mx-auto">
            Entre em contato agora e vamos conversar sobre como posso ajudar você a alcançar seus objetivos
          </p>
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8"
          >
            Fale Comigo Agora
          </Button>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            size="icon"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 bg-transparent"
            onClick={() => window.open("https://wa.me/5522997327151", "_blank")}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 bg-transparent"
            onClick={() =>
              window.open("https://www.instagram.com/oi.ramses?igsh=MWptbmFsOGFzaHZ4eQ%3D%3D&utm_source=qr", "_blank")
            }
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 bg-transparent"
            onClick={() => (window.location.href = "mailto:daviramses61@gmail.com")}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center text-foreground/60 text-sm">
          <p>© 2025 Davi Ramses. Todos os direitos reservados.</p>
          <p className="mt-2">Estrategista de Marketing | Editor Audiovisual | Especialista em IA</p>
        </div>
      </div>
    </footer>
  )
}
