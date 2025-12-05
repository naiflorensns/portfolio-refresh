import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MazeBackground from "./MazeBackground";
import PacmanCharacter from "./PacmanCharacter";
import PacmanDots from "./PacmanDots";
import { projectsList } from "@/data/projects";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {projectsList.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="block h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="group relative overflow-hidden bg-card border-4 border-secondary hover:border-primary transition-all duration-300 animate-scale-in h-full flex flex-col"
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

                  {/* Project Preview - Fixed aspect ratio */}
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden flex-shrink-0">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <Badge 
                      className={`absolute top-3 right-3 ${getCategoryColor(project.category)} text-white border-0 font-pixel text-[8px]`}
                    >
                      {project.category}
                    </Badge>

                    {/* Score */}
                    <div className="absolute bottom-3 right-3">
                      <span className="font-pixel text-[10px] text-primary neon-text bg-background/80 px-2 py-1">
                        {project.score.toLocaleString()} PTS
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info - Fixed height */}
                  <div className="p-4 border-t-2 border-secondary/30 flex flex-col flex-grow">
                    <p className="font-pixel text-[8px] text-secondary mb-2 truncate">
                      {project.client}
                    </p>
                    <h3 className="font-pixel text-[10px] text-primary mb-2 group-hover:neon-text transition-all line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tags - Fixed height container */}
                    <div className="flex flex-wrap gap-1.5 h-[52px] overflow-hidden">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-muted border border-secondary/30 text-[10px] text-muted-foreground h-fit"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-muted border border-secondary/30 text-[10px] text-muted-foreground h-fit">
                          +{project.tags.length - 3}
                        </span>
                      )}
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
