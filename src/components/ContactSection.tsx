import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 234 567 890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@smartrecovery.com",
    href: "mailto:info@smartrecovery.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Home visits available in your area",
    href: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl ambient-orb ambient-orb-reverse" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-card transition-shadow card-lift surface-sheen"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 surface-sheen">
              <h4 className="font-semibold text-foreground mb-3">
                Ready to Book?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Skip the form and book your appointment directly.
              </p>
              <Button
                onClick={() => {
                  const el = document.querySelector("#booking");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full"
              >
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50 surface-sheen">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="contact-name" className="mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Label htmlFor="contact-message" className="mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
