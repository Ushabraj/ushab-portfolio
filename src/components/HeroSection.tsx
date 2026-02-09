import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              AI &amp; ML Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Usha B</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">
                Healthcare AI Innovator
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed">Final year AI & ML engineering student passionate about building intelligent systems for healthcare, computer vision, and applied machine learning. Turning data into impact.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  <FolderOpen size={18} />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-primary/40 hover:bg-primary/10">
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile photo placeholder */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full glow-border animate-pulse-glow">
              <div className="absolute inset-1 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <img src="https://i.postimg.cc/gkc036K1/iportfolio.jpg" alt="Usha B - AI & ML Engineer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>;
};
export default HeroSection;