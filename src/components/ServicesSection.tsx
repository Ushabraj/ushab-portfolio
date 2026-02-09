import { BrainCircuit, HeartPulse, MessageSquare, BarChart3, AppWindow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BrainCircuit,
    title: "AI/ML Model Development",
    desc: "Building prediction and classification systems using modern ML frameworks for real-world applications.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare AI Prototypes",
    desc: "Developing medical prediction and risk detection tools powered by machine learning and computer vision.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Applications",
    desc: "Creating LangChain-based assistants and intelligent chatbots with context-aware dialogue.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    desc: "Preprocessing data and generating ML-based insights with clear, actionable visualizations.",
  },
  {
    icon: AppWindow,
    title: "ML-Powered Web Apps",
    desc: "Building responsive AI web applications using Streamlit and modern frontend technologies.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="border-border/50 bg-card/60 backdrop-blur hover:border-primary/40 hover:glow-border transition-all group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
