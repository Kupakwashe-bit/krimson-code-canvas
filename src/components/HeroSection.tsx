
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const headingElements = document.querySelectorAll(".hero-animate");
    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32 krimson-container">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="hero-animate opacity-0 transition-opacity duration-1000 delay-100 krimson-heading">
            <span className="krimson-gradient-text">KRIMSON</span> TECHNOLOGIES
          </h1>
          <p className="hero-animate opacity-0 transition-opacity duration-1000 delay-300 text-xl md:text-2xl text-muted-foreground">
            EMPOWERING FUTURE TECH
          </p>
          <p className="hero-animate opacity-0 transition-opacity duration-1000 delay-500 text-lg md:text-xl text-foreground/80">
            Building cutting-edge digital solutions in
            <span className="text-primary font-medium"> web development</span>,
            <span className="text-primary font-medium"> mobile apps</span>, and
            <span className="text-primary font-medium"> AI technologies</span>.
          </p>
          <div className="hero-animate opacity-0 transition-opacity duration-1000 delay-700 pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="krimson-button">
              Explore Services <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              View Projects
            </Button>
          </div>
        </div>

        <div className="hero-animate opacity-0 transition-opacity duration-1000 delay-300 flex-1 flex justify-center md:justify-end">
          <div className="krimson-glow">
            <img
              ref={logoRef}
              src="/lovable-uploads/a893f382-efe4-46db-82b4-d8f15f5e5b7e.png"
              alt="KRIMSON TECHNOLOGIES Logo"
              className="w-72 h-72 object-contain animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
