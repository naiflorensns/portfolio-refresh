import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import MazeBackground from "@/components/MazeBackground";
import PacmanDots from "@/components/PacmanDots";
import Ghost from "@/components/Ghost";
import { projectsData } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 container mx-auto px-4 text-center">
          <h1 className="font-pixel text-xl text-primary">PROJECT NOT FOUND</h1>
          <Link to="/projects">
            <Button className="arcade-btn mt-8">BACK TO PROJECTS</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative pt-20 pb-24">
        <MazeBackground opacity={0.05} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link to="/projects" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-pixel text-[10px]">BACK TO PROJECTS</span>
          </Link>

          {/* Project Header */}
          <div className="pixel-border bg-card p-8 mb-8 animate-fade-in">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="font-pixel text-[10px] text-secondary mb-2">{project.client}</p>
                <h1 className="font-pixel text-lg sm:text-xl text-primary neon-text mb-4">
                  {project.title}
                </h1>
                <p className="text-muted-foreground max-w-2xl">{project.description}</p>
              </div>
              <div className="text-right">
                <p className="font-pixel text-[8px] text-secondary mb-1">SCORE</p>
                <p className="font-pixel text-lg text-primary neon-text">
                  {project.score.toLocaleString()}
                </p>
              </div>
            </div>
            <PacmanDots dotCount={15} showPacman={false} className="mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Design Overview */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left">
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="red" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">DESIGN OVERVIEW</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </Card>

              {/* Objective */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="pink" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">OBJECTIVE</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
              </Card>

              {/* Photo Gallery */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="cyan" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">PHOTO GALLERY</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.images.map((image, i) => (
                    <div 
                      key={i}
                      className="aspect-square bg-muted border-2 border-secondary overflow-hidden group cursor-pointer hover:border-primary transition-colors"
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Video Showcase */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="orange" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">VIDEO SHOWCASE</h2>
                </div>
                {project.videos && project.videos.length > 0 ? (
                  <div className="space-y-4">
                    {project.videos.map((video, i) => (
                      <a 
                        key={i}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-muted border-2 border-secondary hover:border-primary transition-colors group"
                      >
                        <div className="w-12 h-12 bg-background border-2 border-secondary flex items-center justify-center group-hover:border-primary transition-colors">
                          {video.platform === "instagram" && (
                            <span className="text-2xl">📸</span>
                          )}
                          {video.platform === "tiktok" && (
                            <span className="text-2xl">🎵</span>
                          )}
                          {video.platform === "youtube" && (
                            <Play className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-pixel text-[10px] text-primary group-hover:neon-text transition-all">
                            {video.platform.toUpperCase()}
                          </p>
                          <p className="text-sm text-muted-foreground">{video.title}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-video bg-muted border-2 border-secondary flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-secondary/30 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">No video available for this project</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Process */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-right">
                <h2 className="font-pixel text-sm text-primary mb-4">PROCESS</h2>
                <div className="space-y-3">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-muted border-2 border-secondary flex items-center justify-center flex-shrink-0">
                        <span className="font-pixel text-[8px] text-primary">{index + 1}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Result */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                <h2 className="font-pixel text-sm text-primary mb-4">FINAL RESULT</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.result}</p>
              </Card>

              {/* Category & Tags */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <h2 className="font-pixel text-sm text-primary mb-4">CATEGORY</h2>
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-pixel text-[10px] mb-4">
                  {project.category}
                </span>
                <h2 className="font-pixel text-sm text-primary mb-3 mt-4">TAGS</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-muted border border-secondary text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Decorative Fruits */}
              <div className="flex justify-center gap-4 py-4">
                {["🍒", "🍓", "🍊", "🍎"].map((fruit, i) => (
                  <span key={i} className="text-2xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                    {fruit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
