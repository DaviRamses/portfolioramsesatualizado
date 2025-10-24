"use client"

import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation onContactClick={() => setIsContactModalOpen(true)} />
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
        <SkillsSection />
        <Footer onContactClick={() => setIsContactModalOpen(true)} />
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </main>
  )
}
