import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "rajb27535@gmail.com", href: "mailto:rajb27535@gmail.com" },
  { icon: Phone, label: "+91 6362744916", href: "tel:+916362744916" },
  { icon: MapPin, label: "Shimoga, Karnataka, India", href: undefined },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/usha-b-35a6362a6" },
  { icon: Github, label: "GitHub", href: "https://github.com/Ushabraj" },
];

const SERVICE_ID = "service_qv6c36g";
const TEMPLATE_ID = "template_92z0hxs";
const PUBLIC_KEY = "6d_gXfuGlMjQFJZCl";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = (formData.get("from_name") as string)?.trim();
    const email = (formData.get("from_email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({ title: "Message sent successfully!" });
      formRef.current.reset();
    } catch {
      toast({ title: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="border-border/50 bg-card/60 backdrop-blur">
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <Input name="from_name" placeholder="Your Name" className="bg-secondary/50 border-border/50" maxLength={100} required />
                <Input name="from_email" placeholder="Your Email" type="email" className="bg-secondary/50 border-border/50" maxLength={255} required />
                <Textarea name="message" placeholder="Your Message" rows={5} className="bg-secondary/50 border-border/50 resize-none" maxLength={1000} required />
                <Button type="submit" className="w-full gap-2" disabled={loading}>
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
