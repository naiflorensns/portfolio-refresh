import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MazeBackground from "./MazeBackground";
import PacmanCharacter from "./PacmanCharacter";
import PacmanDots from "./PacmanDots";
import { Camera, Palette, Briefcase, Play } from "lucide-react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: "public-figure-content",
      title: "Public Figure Content",
      client: "Revalina S. Temat",
      category: "Videography",
      description: "Professional videography for SEVISI Virtual Assistant, creating engaging content for public figures.",
      icon: Camera,
      tags: ["Videography", "Content Creation"],
      score: 10000
    },
    {
      id: "product-photography",
      title: "Product Photography",
      client: "Mid Semester Project",
      category: "Photography",
      description: "High-quality product photography for OMNIA, ASAFF, and ANNIV brands.",
      icon: Camera,
      tags: ["Photography", "Product"],
      score: 8500
    },
    {
      id: "bandung-illustration",
      title: "Bandung Illustration",
      client: "Campus Project",
      category: "Design",
      description: "City composition illustrating Bandung's atmosphere during the pandemic.",
      icon: Palette,
      tags: ["Illustration", "Design"],
      score: 9200
    },
    {
      id: "brand-assets",
      title: "Brand Assets",
      client: "Various Clients",
      category: "Branding",
      description: "Creating comprehensive brand assets including logos, color palettes, and design systems.",
      icon: Briefcase,
      tags: ["Branding", "Design"],
      score: 11000
    },
    {
      id: "video-showcase",
      title: "Video Showcase",
      client: "Personal Projects",
      category: "Video",
      description: "Collection of video works showcasing creative storytelling and editing skills.",
      icon: Play,
      tags: ["Video", "Editing"],
      score: 7800
    },
    {
      id: "social-media",
      title: "Social Media Campaign",
      client: "SEVISI",
      category: "Design",
      description: "Comprehensive social media design and content strategy for brand awareness.",
      icon: Palette,
      tags: ["Social Media", "Campaign"],
      score: 9500
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Videography": "bg-ghost-red",
      "Photography": "bg-ghost-pink", 
      "Design": "bg-ghost-cyan",
      "Branding": "bg-ghost-orange",
      "Video": "bg-ghost-red"
    };
    return colors[category] || "bg-primary";
  };

  return (
    <section className="relative min-h-screen py-24 bg-background overflow-hidden">
      <MazeBackground opacity={0.05} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-pixel text-[10px] text-secondary mb-2">STAGE 03</p>
          <h2 className="font-pixel text-xl sm:text-2xl text-primary neon-text mb-4">
            SELECT PROJECT
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-4">
            Explore my creative work across videography, design, and branding
          </p>
          <PacmanDots dotCount={10} showPacman={false} className="max-w-xs mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="group relative overflow-hidden bg-card border-4 border-secondary hover:border-primary transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Pac-Man hover effect */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${
                      isHovered ? 'left-2 opacity-100' : '-left-12 opacity-0'
                    }`}
                  >
                    <PacmanCharacter size={24} direction="right" />
                  </div>

                  {/* Project Preview */}
                  <div className="h-40 bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 maze-pattern opacity-20" />
                    <Icon className="w-16 h-16 text-secondary/30 group-hover:text-primary/50 transition-colors" />
                    
                    {/* Category Badge */}
                    <Badge 
                      className={`absolute top-3 right-3 ${getCategoryColor(project.category)} text-white border-0 font-pixel text-[8px]`}
                    >
                      {project.category}
                    </Badge>

                    {/* Score */}
                    <div className="absolute bottom-3 right-3">
                      <span className="font-pixel text-[10px] text-primary neon-text">
                        {project.score.toLocaleString()} PTS
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-4 border-t-2 border-secondary/30">
                    <p className="font-pixel text-[8px] text-secondary mb-2">
                      {project.client}
                    </p>
                    <h3 className="font-pixel text-[10px] text-primary mb-2 group-hover:neon-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-muted border border-secondary/30 text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pixel corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;