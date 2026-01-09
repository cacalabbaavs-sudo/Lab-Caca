import { Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#servicos" },
    { label: "Unidades", href: "#unidades" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    "Exames Laboratoriais",
    "Coleta Domiciliar",
    "Exames Empresariais",
    "Atendimento Humanizado",
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/cacalaboratorio", label: "Instagram" },
  ];

  return (
    <footer id="contato" className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container-lab py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="C.A.C.A Laboratório" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Oferecemos serviços de análises clínicas com excelência, 
              tecnologia e profissionais qualificados para cuidar da sua saúde.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+5584991770303" 
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  (84) 99177-0303
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:cacalabbaavs@gmail.com" 
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  cacalabbaavs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-lab py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} C.A.C.A Laboratório. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm">
              Responsável Técnico: Dr(a). Nome - CRF/CRBM 00000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;