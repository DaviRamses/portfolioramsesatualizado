"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onContactClick: () => void
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Davi Ramses</div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Cases
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("formacao")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Formação
            </button>
            <Button
              onClick={onContactClick}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contato
            </Button>
          </div>

          <Button
            onClick={onContactClick}
            size="sm"
            className="md:hidden bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Contato
          </Button>
        </div>
      </div>
    </nav>
  )
}
