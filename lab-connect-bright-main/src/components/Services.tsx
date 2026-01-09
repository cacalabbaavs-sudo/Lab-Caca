import { 
  TestTube2, 
  Home, 
  Building2, 
  HeartPulse,
  Heart,
  Wallet,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: TestTube2,
      title: "Exames Laboratoriais",
      description: "Ampla variedade de exames clínicos com resultados precisos e rápidos.",
    },
    {
      icon: Home,
      title: "Coleta Domiciliar",
      description: "Coletamos suas amostras no conforto da sua casa com todo cuidado.",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado especial e acolhedor para você e toda sua família.",
    },
    {
      icon: Building2,
      title: "Exames Empresariais",
      description: "Atendimento especializado para empresas e medicina ocupacional.",
    },
    {
      icon: Wallet,
      title: "Custo Benefício",
      description: "Exames de qualidade com preços acessíveis para todos.",
    },
    {
      icon: HeartPulse,
      title: "Check-up Completo",
      description: "Pacotes completos de exames para cuidar da sua saúde.",
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 lab-section-alt">
      <div className="container-lab">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Serviços para cuidar da sua{" "}
            <span className="lab-gradient-text">Saúde</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços para atender todas as suas 
            necessidades de diagnóstico laboratorial.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 lab-gradient rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span className="text-sm">Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="lab-gradient hover:opacity-90 transition-opacity text-lg px-8"
            asChild
          >
            <a href="https://wa.me/5584991770303?text=Olá! Gostaria de agendar uma coleta.">
              Agende sua Coleta
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;