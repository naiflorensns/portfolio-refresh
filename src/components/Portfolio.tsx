import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Camera, Palette } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Public Figure Content",
      client: "Revalina S. Temat",
      category: "Videographer",
      description: "Professional videography for SEVISI Virtual Assistant, creating engaging content for public figures.",
      icon: Camera,
      tags: ["Videography", "Content Creation"]
    },
    {
      title: "Product Photography",
      client: "Mid Semester Project",
      category: "Photography",
      description: "High-quality product photography for OMNIA, ASAFF, and ANNIV brands.",
      icon: Camera,
      tags: ["Photography", "Product"]
    },
    {
      title: "Bandung Illustration",
      client: "Campus Project",
      category: "Design",
      description: "City composition illustrating Bandung's atmosphere during the pandemic, featuring iconic landmarks like Museum Geologi and Stasiun Bosscha.",
      icon: Palette,
      tags: ["Illustration", "Design"]
    },
    {
      title: "Brand Assets",
      client: "Various Clients",
      category: "Branding",
      description: "Creating comprehensive brand assets including logos, color palettes, and design systems for multiple industries.",
      icon: Briefcase,
      tags: ["Branding", "Design"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in videography, design, and branding
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 bg-gradient-hero flex items-center justify-center relative overflow-hidden">
                    <Icon className="w-20 h-20 text-white/20 absolute animate-float" />
                    <div className="relative z-10 text-center">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-sm text-primary font-semibold mb-3">
                      {project.client}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="border-primary/20 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
