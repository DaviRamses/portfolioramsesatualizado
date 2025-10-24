import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp, Lightbulb, Video, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "IA e Automação",
    icon: Brain,
    skills: [
      "Conhecimento em API (Integração de Sistemas)",
      "Automação de Tarefas Repetitivas",
      "Otimização de Criativos com IA Generativa",
      "Vibe Coding - Desenvolvimento Ágil",
    ],
  },
  {
    title: "Tráfego & Performance",
    icon: TrendingUp,
    skills: [
      "Meta Ads (Expert)",
      "Otimização de SEO (On-Page)",
      "Análise de Métricas (ROAS/CPA)",
      "Gestão de Campanhas de Alto Orçamento",
    ],
  },
  {
    title: "Visão Estratégica",
    icon: Lightbulb,
    skills: [
      "Copywriting (Intermediário)",
      "Funil de Vendas",
      "Estratégia de Lançamentos",
      "Análise de Mercado e Concorrência",
    ],
  },
  {
    title: "Criação Audiovisual",
    icon: Video,
    skills: ["Edição Profissional (Premiere/After Effects)", "Design de Mockups", "Roteirização", "Motion Graphics"],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="relative py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Habilidades e <span className="text-primary">Conhecimento Estratégico em IA</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Combinação única de criatividade, tecnologia e estratégia para resultados excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
