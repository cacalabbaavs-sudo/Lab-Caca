import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const highlights = [
    { icon: Shield, text: "Qualidade Garantida" },
    { icon: Clock, text: "Resultados Rápidos" },
    { icon: Award, text: "Profissionais Qualificados" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-lab relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              C.A.C.A Laboratório - Cuidando da sua saúde
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Excelência em{" "}
              <span className="lab-gradient-text">Exames Laboratoriais</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Oferecemos serviços de análises clínicas com tecnologia de ponta 
              e profissionais altamente capacitados para cuidar da sua saúde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="lab-gradient hover:opacity-90 transition-opacity text-lg px-8"
              >
                Agende sua Coleta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                Conheça Nossos Serviços
              </Button>
            </div>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-muted-foreground"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 lab-gradient rounded-3xl opacity-20 blur-2xl transform rotate-6" />
              <div className="relative bg-card rounded-3xl border border-border p-6 shadow-xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="C.A.C.A Laboratório - Análises Clínicas" 
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;