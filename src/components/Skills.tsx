import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const expertise = [
    "Videographer",
    "Social Media",
    "Creation of Company Assets",
    "Editorial Design",
    "Logo Design",
    "Print Design"
  ];

  const proficiencies = [
    "Using software for layout design and editing",
    "Traditional and experimental graphic design",
    "Proofing designs and getting them ready for publishing, in both digital and print formats"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center animate-fade-in">
            My Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border shadow-card animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-hero rounded-full"></div>
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 bg-gradient-hero text-white text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border shadow-card animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-hero rounded-full"></div>
                I'm Proficient In
              </h3>
              <ul className="space-y-4">
                {proficiencies.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
