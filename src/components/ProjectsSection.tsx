import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Based Medical Condition Prediction System",
    desc: "ML prediction system with data preprocessing, evaluation metrics, and a deployable web interface for medical condition analysis.",
    tags: ["Python", "ML", "Streamlit", "Healthcare"],
    github: "https://github.com/Ushabraj",
  },
  {
    title: "LangChain-Based Conversational Medical Assistant",
    desc: "Context-aware chatbot using prompt chaining and retrieval-augmented generation for medical Q&A.",
    tags: ["LangChain", "Python", "NLP", "GenAI"],
    github: "https://github.com/Ushabraj",
  },
  {
    title: "Student Performance Prediction Model",
    desc: "Classification model with evaluation metrics and confusion matrix visualization for predicting student outcomes.",
    tags: ["Python", "ML", "Data Analysis"],
    github: "https://github.com/Ushabraj",
  },
  {
    title: "Commercial Website for Natraj Textile",
    desc: "Responsive business frontend website designed for a textile company with modern UI/UX.",
    tags: ["HTML", "CSS", "Frontend"],
    github: "https://github.com/Ushabraj",
  },
  {
    title: "AI-Powered PCOS Risk Detection System",
    desc: "Wearable sensor + vision-based healthcare AI system for early PCOS risk detection. Ongoing research project.",
    tags: ["Computer Vision", "IoT", "Healthcare AI", "Deep Learning"],
    github: "https://github.com/Ushabraj",
    ongoing: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="border-border/50 bg-card/60 backdrop-blur hover:border-primary/40 transition-all group flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{p.title}</h3>
                  {p.ongoing && (
                    <Badge className="flex-shrink-0 bg-accent/20 text-accent border-accent/30 text-[10px]">
                      Ongoing
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[11px]">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button asChild variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-primary/10">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
