import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const courses = [
  {
    title: "Tráfego do Zero",
    instructor: "Pedro Sobral",
    description: "Formação completa em Meta Ads, desde fundamentos até estratégias avançadas de escala.",
  },
  {
    title: "Tráfego Direto",
    instructor: "Especialização Avançada",
    description: "Técnicas avançadas de otimização de campanhas e análise de métricas para maximizar ROAS.",
  },
  {
    title: "Automação com IA",
    instructor: "Formação Complementar",
    description: "Integração de APIs, automação de processos e uso de IA generativa em marketing.",
  },
  {
    title: "Edição Audiovisual Profissional",
    instructor: "Certificação Técnica",
    description: "Domínio de ferramentas Adobe (Premiere, After Effects) e técnicas de storytelling visual.",
  },
]

export function EducationSection() {
  return (
    <section id="formacao" className="relative py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Formação <span className="text-primary">Complementar</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Investimento contínuo em conhecimento e atualização profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{course.title}</CardTitle>
                    <p className="text-sm text-primary">{course.instructor}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-pretty">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
