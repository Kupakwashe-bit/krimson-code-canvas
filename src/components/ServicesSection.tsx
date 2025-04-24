import { Code, Smartphone, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  features: string[];
}

function ServiceCard({ title, description, icon: Icon, className, features }: ServiceCardProps) {
  return (
    <div className={cn("krimson-card group", className)}>
      <div className="flex flex-col space-y-4 h-full">
        <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        
        <ul className="pt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="krimson-section bg-background/50">
      <div className="krimson-container">
        <div className="text-center mb-16">
          <h2 className="krimson-subheading mb-3">WHAT I DO</h2>
          <h3 className="krimson-heading mb-6">Our Digital Services</h3>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            We provide cutting-edge technology solutions to help businesses and individuals thrive in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Development"
            description="Custom websites and web applications that are responsive, fast, and user-friendly."
            icon={Code}
            features={[
              "Frontend Development (React, Vue, Angular)",
              "Backend Development (Node.js, Python)",
              "E-commerce Solutions",
              "Progressive Web Apps",
              "CMS Integration"
            ]}
          />
          <ServiceCard
            title="Mobile App Development"
            description="Native and cross-platform mobile applications for iOS and Android devices."
            icon={Smartphone}
            features={[
              "iOS & Android Development",
              "Cross-Platform Apps (React Native, Flutter)",
              "App UI/UX Design",
              "App Maintenance & Support",
              "App Store Optimization"
            ]}
            className="lg:translate-y-8"
          />
          <ServiceCard
            title="AI Development"
            description="Intelligent solutions powered by machine learning and artificial intelligence."
            icon={Brain}
            features={[
              "Machine Learning Models",
              "Natural Language Processing",
              "Computer Vision Systems",
              "AI Integration Services",
              "Chatbots & Virtual Assistants"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
