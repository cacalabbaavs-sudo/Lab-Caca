import { MapPin, Phone, Clock, Building2, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Units = () => {
  const units = [
    {
      name: "Unidade Alecrim",
      address: "Rua Dr. Luiz Dutra, 304 - Alecrim, Natal/RN",
      phone: "(84) 3223-3595",
      partner: null,
    },
    {
      name: "Unidade Parque dos Coqueiros",
      address: "Av. dos Expedicionários, 555 - Nossa Sra. da Apresentação, Natal/RN",
      phone: "(84) 98705-1764",
      partner: null,
    },
    {
      name: "Unidade Planalto",
      address: "Rua Monte Rei, 765, Loja 03 - Planalto, Natal/RN",
      phone: "(84) 99898-1906",
      partner: null,
    },
    {
      name: "Unidade Cidade da Esperança",
      address: "Av. Paraíba, 71 - Cidade da Esperança, Natal/RN",
      phone: "(84) 99177-0303",
      partner: "Seven Clínica",
    },
    {
      name: "Unidade Romualdo",
      address: "Av. Romualdo Galvão, 630 - Barro Vermelho, Natal/RN",
      phone: "(84) 99177-0303",
      partner: "Clínica Vivalli",
    },
    {
      name: "Unidade Nova Parnamirim",
      address: "Av. Abel Cabral, 2550 - Nova Parnamirim/RN",
      phone: "(84) 99177-0303",
      partner: "Clínica Viverse",
    },
    {
      name: "Unidade Emaús",
      address: "Av. Aeroporto Petrolina, 102 - Parnamirim/RN",
      phone: "(84) 99138-8474",
      partner: null,
    },
    {
      name: "Unidade São Gonçalo",
      address: "Av. Coronel Estevan Moura, 75a - São Gonçalo/RN",
      phone: "(84) 99177-0303",
      partner: "Seven Clínica",
    },
    {
      name: "Unidade Macaíba",
      address: "Av. Monica Nóbrega Dantas, 29 - Macaíba/RN",
      phone: "(84) 99177-0303",
      partner: "Clínica Macaíba",
    },
    {
      name: "Unidade Cidade das Rosas",
      address: "Av. Flores Silvestres, 695 A, Jardins - São Gonçalo do Amarante/RN",
      phone: "(84) 98761-4325",
      partner: null,
    },
    {
      name: "Unidade Santa Cruz",
      address: "Rua Senador João Câmara, 159, Loja B, Centro - Santa Cruz/RN",
      phone: "(84) 99499-8326",
      partner: null,
    },
    {
      name: "Unidade São Miguel do Gostoso",
      address: "Av. dos Arrecifes, 1442, Centro - São Miguel do Gostoso/RN",
      phone: "(84) 99465-5361",
      partner: null,
    },
    {
      name: "Unidade Extremoz",
      address: "Rua Pinheira, S/N, Loja 12 - Potengi Mall, Extremoz/RN",
      phone: "(84) 99177-0303",
      partner: "Seven Clínica",
    },
  ];

  const hours = "Seg-Sex: 6h às 16h30 | Sáb: 6h às 10h30";

  return (
    <section id="unidades" className="py-20 lg:py-28">
      <div className="container-lab">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            Nossas Unidades
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Encontre a unidade mais{" "}
            <span className="lab-gradient-text">Próxima de Você</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos presentes em diversas localidades para atender você 
            com comodidade e praticidade.
          </p>
        </div>
        
        {/* Units grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.address)}`;
            
            return (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Image placeholder - opens Google Maps */}
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-b border-border cursor-pointer hover:from-primary/20 hover:to-accent/20 transition-colors block"
                >
                  <div className="text-center p-4">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      Ver no mapa <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
                
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {unit.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {unit.address}
                      </span>
                    </div>

                    {unit.partner && (
                      <div className="flex items-center gap-3">
                        <Building2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-accent font-medium">
                          {unit.partner}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a 
                        href={`tel:${unit.phone.replace(/\D/g, '')}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {unit.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {hours}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="lab-gradient hover:opacity-90 transition-opacity text-lg px-8"
            asChild
          >
            <a href="https://wa.me/5584991770303?text=Olá! Gostaria de saber mais sobre as unidades.">
              Entre em Contato
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Units;