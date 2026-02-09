import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <Card className="border-border/50 bg-card/60 backdrop-blur">
          <CardContent className="p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                B.E. in Artificial Intelligence &amp; Machine Learning
              </h3>
              <p className="text-muted-foreground">
                PES Institute of Technology and Management, Shimoga, Karnataka
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Calendar size={14} />
                <span>2022 – 2026 · Expected Graduation: 2026</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
