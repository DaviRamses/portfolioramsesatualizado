import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const cases = [
  {
    title: "Lançamento Digital de Alto Impacto",
    image: "/placeholder.svg?height=300&width=400",
    roles: ["Editor Audiovisual", "Designer", "Gestor de Tráfego"],
    description: "Campanha completa de lançamento com vídeos, criativos e gestão de tráfego pago.",
  },
  {
    title: "E-commerce de Moda - Escala de Vendas",
    image: "/placeholder.svg?height=300&width=400",
    roles: ["Gestor de Tráfego", "Designer"],
    description: "Otimização de campanhas Meta Ads com foco em ROAS e conversão.",
  },
  {
    title: "Infoproduto - Funil Completo",
    image: "/placeholder.svg?height=300&width=400",
    roles: ["Editor Audiovisual", "Gestor de Tráfego", "Designer"],
    description: "Criação de VSL, páginas de vendas e gestão de tráfego para infoproduto.",
  },
  {
    title: "Marca Local - Presença Digital",
    image: "/placeholder.svg?height=300&width=400",
    roles: ["Designer", "Gestor de Tráfego"],
    description: "Desenvolvimento de identidade visual e estratégia de tráfego local.",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="relative py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Cases de Sucesso & <span className="text-primary">Resultados Comprovados</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Experiência em Lançamentos e E-commerce com foco em performance e conversão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-balance">{caseItem.title}</CardTitle>
                <p className="text-foreground/70 mb-4 text-pretty">{caseItem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseItem.roles.map((role, roleIndex) => (
                    <Badge key={roleIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {role}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
