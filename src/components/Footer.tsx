
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="krimson-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary tracking-wider">KRIMSON</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              EMPOWERING FUTURE TECH with cutting-edge digital solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors">
                <Twitter size={18} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors">
                <Linkedin size={18} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors">
                <Github size={18} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors">
                <Mail size={18} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App Development</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Development</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cloud Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Subscribe to get the latest updates
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="text-sm py-2 px-3 bg-muted/50 border border-border/50 rounded-l-md w-full" 
                />
                <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground py-2 px-4 text-sm rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-muted-foreground">
              © {currentYear} KRIMSON TECHNOLOGIES. All rights reserved.
            </p>
            <p className="text-muted-foreground mt-2 md:mt-0">
              Designed with <span className="text-primary">♥</span> for the digital era
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
