import { Phone, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                SR
              </div>
              <div>
                <p className="font-display font-semibold text-background text-lg leading-tight">
                  Smart Recovery
                </p>
                <p className="text-xs text-background/60">Physiotherapy</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              Expert physiotherapy care designed to help you recover smarter, 
              move better, and live healthier. Professional treatment available 
              online and at your home.
            </p>
            <p className="text-sm italic text-background/50">
              "Make a smart choice for your health today"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 234 567 890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@smartrecovery.com"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@smartrecovery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} SR Physiotherapy Clinic. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
