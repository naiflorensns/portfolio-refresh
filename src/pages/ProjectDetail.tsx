import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Palette, Briefcase, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import MazeBackground from "@/components/MazeBackground";
import PacmanDots from "@/components/PacmanDots";
import Ghost from "@/components/Ghost";

const projectsData: Record<string, {
  title: string;
  client: string;
  category: string;
  description: string;
  overview: string;
  objective: string;
  process: string[];
  result: string;
  icon: any;
  score: number;
}> = {
  "public-figure-content": {
    title: "Public Figure Content",
    client: "Revalina S. Temat",
    category: "Videography",
    description: "Professional videography for SEVISI Virtual Assistant",
    overview: "Created engaging video content for public figure Revalina S. Temat, focusing on SEVISI Virtual Assistant promotional materials and social media content.",
    objective: "To produce high-quality video content that effectively communicates the value proposition of SEVISI while maintaining the personal brand of the public figure.",
    process: [
      "Pre-production planning and storyboarding",
      "Professional video shooting with proper lighting",
      "Post-production editing with color grading",
      "Sound design and music integration",
      "Final delivery in multiple formats"
    ],
    result: "Successfully delivered a series of engaging videos that increased brand awareness and engagement across social media platforms.",
    icon: Camera,
    score: 10000
  },
  "product-photography": {
    title: "Product Photography",
    client: "Mid Semester Project",
    category: "Photography",
    description: "High-quality product photography for multiple brands",
    overview: "A comprehensive product photography project showcasing items from OMNIA, ASAFF, and ANNIV brands with professional lighting and styling.",
    objective: "To capture products in their best light, highlighting features and creating aspirational imagery for marketing purposes.",
    process: [
      "Product analysis and concept development",
      "Set design and prop styling",
      "Professional photography with various angles",
      "Image editing and retouching",
      "Final export for various platforms"
    ],
    result: "Delivered a cohesive collection of product images that elevated brand perception and improved marketing materials.",
    icon: Camera,
    score: 8500
  },
  "bandung-illustration": {
    title: "Bandung Illustration",
    client: "Campus Project",
    category: "Design",
    description: "City composition illustrating Bandung's atmosphere",
    overview: "An artistic illustration project capturing the unique atmosphere of Bandung during the pandemic, featuring iconic landmarks like Museum Geologi and Stasiun Bosscha.",
    objective: "To create a meaningful visual representation of Bandung that resonates with locals and captures the city's spirit during challenging times.",
    process: [
      "Research on Bandung's iconic landmarks",
      "Sketch development and composition",
      "Digital illustration creation",
      "Color palette selection for mood",
      "Final refinement and details"
    ],
    result: "A beautiful illustration that captures the essence of Bandung and received recognition for its artistic merit.",
    icon: Palette,
    score: 9200
  },
  "brand-assets": {
    title: "Brand Assets",
    client: "Various Clients",
    category: "Branding",
    description: "Comprehensive brand assets for multiple industries",
    overview: "Development of complete brand identity systems including logos, color palettes, typography, and design guidelines for various clients.",
    objective: "To create distinctive and memorable brand identities that effectively communicate each client's values and appeal to their target audience.",
    process: [
      "Brand discovery and research",
      "Concept development and sketching",
      "Logo design iterations",
      "Brand guidelines creation",
      "Asset delivery and implementation support"
    ],
    result: "Successfully delivered cohesive brand systems that helped clients establish strong market presence.",
    icon: Briefcase,
    score: 11000
  },
  "video-showcase": {
    title: "Video Showcase",
    client: "Personal Projects",
    category: "Video",
    description: "Creative video works and storytelling",
    overview: "A collection of personal video projects showcasing various styles and techniques in video production and storytelling.",
    objective: "To explore creative video techniques and develop a diverse portfolio demonstrating versatility in video production.",
    process: [
      "Concept ideation and planning",
      "Video shooting and direction",
      "Creative editing techniques",
      "Motion graphics integration",
      "Color grading and final polish"
    ],
    result: "A diverse portfolio of video work that demonstrates technical skill and creative vision.",
    icon: Play,
    score: 7800
  },
  "social-media": {
    title: "Social Media Campaign",
    client: "SEVISI",
    category: "Design",
    description: "Comprehensive social media design strategy",
    overview: "A full social media campaign design for SEVISI, including content templates, carousel designs, and visual strategy.",
    objective: "To create a cohesive and engaging social media presence that drives brand awareness and user engagement.",
    process: [
      "Social media audit and strategy",
      "Template design system creation",
      "Content calendar development",
      "Carousel and story designs",
      "Performance tracking and optimization"
    ],
    result: "Increased social media engagement and established a consistent brand presence across platforms.",
    icon: Palette,
    score: 9500
  }
};

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
  const ghosts: Array<"red" | "pink" | "cyan" | "orange"> = ["red", "pink", "cyan", "orange"];

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
              {/* Overview */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left">
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="red" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">OVERVIEW</h2>
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

              {/* Photo Gallery Placeholder */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="cyan" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">PHOTO GALLERY</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i}
                      className="aspect-square bg-muted border-2 border-secondary flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-secondary/30" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Upload photos to showcase your work
                </p>
              </Card>

              {/* Video Showcase Placeholder */}
              <Card className="pixel-border bg-card p-6 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Ghost size={24} color="orange" animated={false} />
                  <h2 className="font-pixel text-sm text-primary">VIDEO SHOWCASE</h2>
                </div>
                <div className="aspect-video bg-muted border-2 border-secondary flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-secondary/30 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Embed or upload video</p>
                  </div>
                </div>
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
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-pixel text-[10px]">
                  {project.category}
                </span>
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