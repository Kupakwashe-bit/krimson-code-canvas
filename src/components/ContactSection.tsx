import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (name && email && subject && message) {
      setFormStatus("submitting");

      // Simulate sending email
      setTimeout(() => {
        window.location.href = `mailto:nyangurukupakwashe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        setFormStatus("success");

        // Reset form after success
        form.reset();

        // Reset status after delay
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      }, 1500);
    } else {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="krimson-section">
      <div className="krimson-container">
        <div className="text-center mb-16">
          <h2 className="krimson-subheading mb-3">GET IN TOUCH</h2>
          <h3 className="krimson-heading mb-6">Contact Me</h3>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h4 className="text-xl font-semibold mb-6">Send us a message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  required
                  className="bg-muted/50 border-border/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  required
                  className="min-h-[150px] bg-muted/50 border-border/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="krimson-button w-full"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "idle" && "Send Message"}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && "Message Sent!"}
                {formStatus === "error" && "Error! Try Again"}
              </Button>
              
              {formStatus === "success" && (
                <p className="text-sm text-primary">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">nyangurukupakwashe@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">0781 856 876</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">
                      Chitungwiza Zengeza 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Working Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            
            <div className="krimson-card">
              <h4 className="font-medium mb-3">Ready to start your project?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a free consultation call with our experts to discuss your ideas.
              </p>
              <Button className="krimson-button">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
