import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  { icon: Mail, label: "rajb27535@gmail.com", href: "mailto:rajb27535@gmail.com" },
  { icon: Phone, label: "+91 6362744916", href: "tel:+916362744916" },
  { icon: MapPin, label: "Shimoga, Karnataka, India", href: undefined },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/usha-b-35a6362a6" },
  { icon: Github, label: "GitHub", href: "https://github.com/Ushabraj" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing AI/ML projects, research collaborations, or
              internship opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={18} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="border-border/50 bg-card/60 backdrop-blur">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Your Name" className="bg-secondary/50 border-border/50" />
              <Input placeholder="Your Email" type="email" className="bg-secondary/50 border-border/50" />
              <Textarea placeholder="Your Message" rows={5} className="bg-secondary/50 border-border/50 resize-none" />
              <Button className="w-full gap-2">
                <Mail size={16} />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
