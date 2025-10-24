"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Mail } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-foreground">Escolha como Falar Comigo</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            size="lg"
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 text-lg"
            onClick={() => window.open("https://wa.me/5522997327151", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Conversar por WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full h-14 text-lg border-primary/50 hover:bg-primary/10 bg-transparent"
            onClick={() =>
              window.open("https://www.instagram.com/oi.ramses?igsh=MWptbmFsOGFzaHZ4eQ%3D%3D&utm_source=qr", "_blank")
            }
          >
            <Instagram className="mr-2 h-5 w-5" />
            Seguir e Enviar Direct
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full h-14 text-lg border-primary/50 hover:bg-primary/10 bg-transparent"
            onClick={() => (window.location.href = "mailto:daviramses61@gmail.com")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Enviar E-mail
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
