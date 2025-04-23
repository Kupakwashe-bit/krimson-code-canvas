
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "mobile" | "ai";
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with inventory management and payment processing.",
    category: "web",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Mobile application for tracking workouts, nutrition, and personal health goals.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1374&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "iOS/Android"]
  },
  {
    id: 3,
    title: "Content Recommendation Engine",
    description: "AI-powered system that analyzes user behavior to suggest relevant content.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop",
    tags: ["Machine Learning", "Python", "TensorFlow"]
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description: "Interactive platform for property listings with virtual tours and market analysis.",
    category: "web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop",
    tags: ["Vue.js", "Django", "PostgreSQL"]
  },
  {
    id: 5,
    title: "Delivery Tracking App",
    description: "Mobile solution for real-time package tracking and delivery management.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1470&auto=format&fit=crop",
    tags: ["Flutter", "Google Maps API", "Firebase"]
  },
  {
    id: 6,
    title: "Predictive Analytics Dashboard",
    description: "Business intelligence tool that forecasts trends based on historical data.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["Data Science", "Python", "React"]
  }
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai">("all");
  
  const filteredProjects = projects.filter(
    project => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="krimson-section">
      <div className="krimson-container">
        <div className="text-center mb-16">
          <h2 className="krimson-subheading mb-3">OUR WORK</h2>
          <h3 className="krimson-heading mb-6">Featured Projects</h3>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Explore our portfolio of successful digital solutions across various industries.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-muted/30">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors",
                filter === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              )}
            >
              All
            </button>
            <button
              onClick={() => setFilter("web")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors",
                filter === "web" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              )}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors",
                filter === "mobile" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              )}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors",
                filter === "ai" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              )}
            >
              AI
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="krimson-card group overflow-hidden">
              <div className="h-48 overflow-hidden rounded-md mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="link" className="p-0 text-primary flex items-center gap-1 hover:gap-2 transition-all">
                View Details <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
