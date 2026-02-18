import { Video, Home, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "online",
    icon: Video,
    title: "Online Consultation",
    description:
      "Get expert physiotherapy advice from the comfort of your home through secure video consultations.",
    benefits: [
      "Convenient from anywhere",
      "No travel required",
      "Flexible scheduling",
      "Full assessment & guidance",
    ],
    duration: "30-45 min session",
    color: "primary",
  },
  {
    id: "home",
    icon: Home,
    title: "Home Physiotherapy",
    description:
      "Receive comprehensive physiotherapy treatment at your doorstep with personalized care plans.",
    benefits: [
      "Treatment at your home",
      "Hands-on therapy",
      "Personalized exercises",
      "Progress monitoring",
    ],
    duration: "45-60 min session",
    color: "accent",
  },
];

export const ServicesSection = () => {
  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl ambient-orb ambient-orb-slow" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-accent/3 rounded-full blur-3xl ambient-orb ambient-orb-reverse" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
            Professional Physiotherapy, Your Way
          </h2>
          <p className="text-muted-foreground">
            Choose the consultation type that works best for you. Whether online or at home, 
            receive the same high-quality, evidence-based care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 animate-fade-in-up card-lift surface-sheen"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                <service.icon className="w-8 h-8" />
              </div>

              {/* Duration badge */}
              <div className="absolute top-8 right-8 flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {service.duration}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                      service.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={service.color === "primary" ? "default" : "accent"}
                className="w-full group/btn"
                size="lg"
                onClick={scrollToBooking}
              >
                Book {service.title}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Not sure which service is right for you?{" "}
            <button
              onClick={scrollToBooking}
              className="text-primary font-medium hover:underline"
            >
              Contact us for a free consultation
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
