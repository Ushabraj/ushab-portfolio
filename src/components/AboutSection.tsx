import { Badge } from "@/components/ui/badge";

const strengths = [
  "Problem Solving",
  "Applied AI",
  "Technical Research",
  "Analytical Thinking",
  "Communication",
  "Teamwork",
  "Leadership",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm a final-year B.E. student in Artificial Intelligence &amp; Machine Learning at
            PES Institute of Technology and Management, Shimoga (2022–2026). My journey has been
            driven by a deep curiosity for how intelligent systems can solve real-world problems —
            especially in healthcare.
          </p>
          <p>
            My work spans AI-driven software solutions, healthcare technology, computer vision,
            and applied ML projects. I focus on building practical, research-informed prototypes
            that bridge the gap between academic innovation and real impact.
          </p>
          <p>
            I'm motivated by hands-on engineering and thrive in collaborative, research-oriented
            environments where technology creates meaningful change.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {strengths.map((s) => (
            <Badge
              key={s}
              className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
            >
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
