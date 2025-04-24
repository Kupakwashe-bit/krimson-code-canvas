import { CheckCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl font-bold krimson-gradient-text mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="krimson-section bg-card/50">
      <div className="krimson-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="krimson-subheading mb-3">ABOUT ME</h2>
            <h3 className="krimson-heading mb-6">EMPOWERING FUTURE TECH</h3>
            <p className="text-muted-foreground mb-6">
              KRIMSON TECHNOLOGIES is a forward-thinking digital agency specializing in creating innovative solutions that help businesses thrive in today's technology-driven world. Our team of experts combines technical knowledge with creative thinking to deliver exceptional results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Innovation-Driven Approach</h4>
                  <p className="text-sm text-muted-foreground">
                    We constantly explore emerging technologies to provide cutting-edge solutions that give our clients a competitive edge.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Client-Centered Development</h4>
                  <p className="text-sm text-muted-foreground">
                    We collaborate closely with our clients, ensuring that every solution is tailored to their specific needs and objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Commitment to Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Quality is at the core of everything we do, from design and development to testing and deployment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Users className="h-10 w-10 p-2 bg-primary/10 rounded-full text-primary" />
              <div>
                <h4 className="font-medium">Expert Team</h4>
                <p className="text-sm text-muted-foreground">
                  Our talented professionals bring diverse skills and experience to every project.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 border border-border/50">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <StatItem value="50+" label="Projects Completed" />
              <StatItem value="20+" label="Happy Clients" />
              <StatItem value="5+" label="Years Experience" />
              <StatItem value="3" label="Core Technologies" />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg mb-2">Our Mission</h4>
              <p className="text-sm text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, improve efficiency, and enhance user experiences in the digital landscape.
              </p>
              
              <h4 className="font-medium text-lg mb-2">Our Vision</h4>
              <p className="text-sm text-muted-foreground">
                To be the leading technology partner for businesses seeking to leverage the power of digital transformation and stay ahead in a rapidly evolving tech environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
