import { Button } from "@/components/ui/button";
import { Calendar, Video, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-physio.jpg";

const trustPoints = [
  "Chartered Physiotherapist",
  "Evidence-Based Care",
  "Personalized Treatment Plans",
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl ambient-orb ambient-orb-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl ambient-orb ambient-orb-reverse" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Online & Home Consultations Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up delay-100">
              Make a{" "}
              <span className="text-gradient-primary">Smart Choice</span>
              <br />
              for Your Health Today
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
              Expert physiotherapy care by Dr. Rehan Ejaz, Chartered Physiotherapist. 
              Get personalized treatment plans designed for your recovery journey.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-in-up delay-300">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {point}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-400">
              <Button
                variant="hero"
                onClick={() => scrollToSection("#booking")}
                className="group"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                onClick={() => scrollToSection("#booking")}
              >
                <Video className="w-5 h-5" />
                Online Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-xl surface-sheen">
              <img
                src={heroImage}
                alt="Professional physiotherapy treatment session"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-card animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Patients Treated</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-primary animate-float delay-200">
              <p className="font-display font-bold">5+ Years</p>
              <p className="text-xs opacity-90">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
