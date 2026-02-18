import { Award, Heart, GraduationCap, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Chartered Physiotherapist",
    description: "Fully qualified and registered with professional bodies",
  },
  {
    icon: Award,
    title: "Evidence-Based Practice",
    description: "Treatment approaches backed by scientific research",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Personalized care tailored to your unique needs",
  },
  {
    icon: Users,
    title: "Holistic Care",
    description: "Treating the whole person, not just the symptoms",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl ambient-orb" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 surface-sheen">
              <div className="aspect-square rounded-2xl bg-card shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary">RE</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Dr. Rehan Ejaz
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Chartered Physiotherapist
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-foreground">5+</p>
                      <p className="text-xs text-muted-foreground">Years Exp.</p>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-foreground">1000+</p>
                      <p className="text-xs text-muted-foreground">Patients</p>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-foreground">98%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium mb-4 animate-fade-in">
              About Your Physiotherapist
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
              Expert Care, Compassionate Treatment
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Dr. Rehan Ejaz, a Chartered Physiotherapist dedicated to helping you achieve 
              optimal physical health and recovery. With over a decade of experience, I specialize 
              in providing evidence-based physiotherapy treatments tailored to your individual needs.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines the latest therapeutic techniques with a genuine understanding 
              of each patient's unique circumstances. Whether you're recovering from an injury, 
              managing chronic pain, or seeking to improve your mobility, I'm here to guide you 
              on your journey to recovery.
            </p>

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in-up card-lift surface-sheen"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
