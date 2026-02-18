import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Video,
  Home,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const serviceTypes = [
  {
    id: "online",
    icon: Video,
    title: "Online Consultation",
    duration: "30-45 min",
  },
  {
    id: "home",
    icon: Home,
    title: "Home Physiotherapy",
    duration: "45-60 min",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export const BookingSection = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsComplete(true);
    toast({
      title: "Booking Confirmed!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  const resetForm = () => {
    setStep(1);
    setSelectedService("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ name: "", email: "", phone: "", notes: "" });
    setIsComplete(false);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedService !== "";
      case 2:
        return selectedDate !== undefined && selectedTime !== "";
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return true;
    }
  };

  if (isComplete) {
    return (
      <section id="booking" className="py-20 lg:py-32 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 animate-fade-in-up">
              Booking Confirmed!
            </h2>
            <p className="text-muted-foreground mb-8 animate-fade-in-up delay-100">
              Thank you for booking with Smart Recovery Physiotherapy. We've sent a confirmation 
              email with all the details.
            </p>
            <div className="bg-secondary/50 rounded-2xl p-6 mb-8 animate-fade-in-up delay-200">
              <div className="grid sm:grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-sm text-muted-foreground">Service</p>
                  <p className="font-medium text-foreground">
                    {serviceTypes.find((s) => s.id === selectedService)?.title}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium text-foreground">
                    {selectedDate && format(selectedDate, "PPP")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium text-foreground">{selectedTime}</p>
                </div>
              </div>
            </div>
            <Button onClick={resetForm} variant="outline" size="lg">
              Book Another Appointment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl ambient-orb ambient-orb-slow" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-primary font-medium mb-4">
            Book Your Appointment
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
            Start Your Recovery Journey
          </h2>
          <p className="text-muted-foreground">
            Schedule your consultation in just a few simple steps.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all",
                    step >= i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                </div>
                {i < 4 && (
                  <div
                    className={cn(
                      "hidden sm:block w-20 lg:w-32 h-1 mx-2 rounded transition-all",
                      step > i ? "bg-primary" : "bg-secondary"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="hidden sm:flex justify-between mt-3 text-sm text-muted-foreground">
            <span>Service</span>
            <span>Date & Time</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-2xl mx-auto bg-background rounded-3xl p-8 shadow-card border border-border/50 surface-sheen">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Select Your Service
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={cn(
                      "p-6 rounded-2xl border-2 text-left transition-all",
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <service.icon
                      className={cn(
                        "w-8 h-8 mb-4",
                        selectedService === service.id
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                    <h4 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.duration}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Choose Date & Time
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label className="mb-3 block">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          format(selectedDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0
                        }
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label className="mb-3 block">Select Time</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "p-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2",
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        )}
                      >
                        <Clock className="w-4 h-4" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Patient Details */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Your Details
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 234 567 890"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes" className="mb-2 block">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Describe your condition or any specific concerns..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Confirm Your Booking
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Service</p>
                      <p className="font-medium text-foreground">
                        {serviceTypes.find((s) => s.id === selectedService)?.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium text-foreground">
                        {serviceTypes.find((s) => s.id === selectedService)?.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium text-foreground">
                        {selectedDate && format(selectedDate, "PPPP")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium text-foreground">{selectedTime}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium text-foreground">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{formData.email}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{formData.phone}</p>
                  </div>
                  {formData.notes && (
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">Notes</p>
                      <p className="font-medium text-foreground">{formData.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            {step > 1 ? (
              <Button variant="ghost" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <div />
            )}
            {step < 4 ? (
              <Button onClick={handleNext} disabled={!canProceed()}>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="min-w-[150px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Booking...
                  </span>
                ) : (
                  <>
                    Confirm Booking
                    <CheckCircle2 className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
