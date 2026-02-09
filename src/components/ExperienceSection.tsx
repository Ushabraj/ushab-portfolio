import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const ExperienceSection = () => {
  return <section id="experience" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Experience &amp; <span className="text-gradient">Training</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
          {/* Current */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary glow-border" />
            <Card className="border-border/50 bg-card/60 backdrop-blur">
              <CardContent className="p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-primary" size={20} />
                    <h3 className="text-lg font-semibold">Java Full Stack Internship</h3>
                  </div>
                  <Badge className="w-fit bg-primary/10 text-primary border-primary/30">Current</Badge>
                </div>
                <p className="text-muted-foreground">Palle Technologies</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>2026 – Present</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Hands-on ML workflows and model evaluation</li>
                  <li>Computer vision systems and full-stack prototypes</li>
                  <li>End-to-end AI/ML project development</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Academic projects */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-primary/50" />
            <Card className="border-border/50 bg-card/60 backdrop-blur">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-accent" size={20} />
                  <h3 className="text-lg font-semibold">Project-Driven Experience</h3>
                </div>
                <p className="text-muted-foreground">PES Institute of Technology and Management</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>2023 – Present</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Built ML prediction systems for healthcare applications</li>
                  <li>Developed conversational AI using LangChain</li>
                  <li>Created responsive web applications and dashboards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;