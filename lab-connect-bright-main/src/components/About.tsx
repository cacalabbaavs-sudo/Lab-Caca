import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    "Mais de 50 anos de experiência",
    "Equipe de profissionais especializados",
    "Tecnologia de ponta em análises",
    "Resultados rápidos e confiáveis",
    "Atendimento humanizado",
    "Certificações de qualidade",
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="container-lab">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 lab-gradient opacity-10" />
              <div className="absolute inset-4 bg-card border border-border rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-3xl font-bold">+</span>
                  </div>
                  <p className="text-muted-foreground">
                    Imagem institucional do laboratório
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg hidden md:block">
              <div className="text-center">
                <span className="block text-4xl font-bold lab-gradient-text">+10.000</span>
                <span className="text-muted-foreground text-sm">Exames realizados</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium">
              Sobre Nós
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Comprometidos com a sua{" "}
              <span className="lab-gradient-text">Saúde e Bem-estar</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com mais de 50 anos de tradição no mercado, somos um laboratório dedicado 
              a oferecer serviços de análises clínicas com excelência e precisão. Nossa 
              missão é proporcionar diagnósticos confiáveis para que você e sua família 
              possam cuidar da saúde com tranquilidade.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Ao longo de cinco décadas, construímos uma história de confiança e 
              comprometimento com a saúde da população. Contamos com equipamentos 
              modernos e uma equipe de profissionais altamente qualificados, sempre 
              focados em entregar resultados precisos e um atendimento humanizado.
            </p>
            
            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="lab-gradient hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="https://wa.me/5584991770303?text=Olá! Gostaria de saber mais sobre o laboratório.">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;