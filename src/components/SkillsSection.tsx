import { Code, Brain, Layers, Eye, Globe, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { icon: Code, title: "Programming", skills: ["Python", "Java", "C", "SQL"] },
  { icon: Brain, title: "AI / ML", skills: ["Machine Learning", "Deep Learning", "Generative AI"] },
  { icon: Layers, title: "Frameworks", skills: ["PyTorch", "TensorFlow", "LangChain"] },
  { icon: Eye, title: "Domains", skills: ["Computer Vision", "NLP", "Healthcare AI"] },
  { icon: Globe, title: "Web", skills: ["HTML", "CSS", "Frontend"] },
  { icon: Database, title: "Data & DB", skills: ["DBMS"] },
  { icon: Wrench, title: "Tools", skills: ["GitHub", "Streamlit", "ML Workflows"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {categories.map(({ icon: Icon, title, skills }) => (
            <Card key={title} className="border-border/50 bg-card/60 backdrop-blur hover:border-primary/40 transition-colors group">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="text-xs bg-secondary text-secondary-foreground"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
