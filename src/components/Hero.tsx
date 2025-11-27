import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center animate-float">
              <span className="text-6xl font-bold text-white">
            </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            NAJWA ALAYYA
            <br />
            FATHARANI
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide">
            Graphic Designer & Videographer
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Creating visual stories that inspire, engage, and leave lasting impressions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-card" onClick={() => scrollToSection("portfolio")}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <button onClick={() => scrollToSection("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce" aria-label="Scroll down">
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>;
};
export default Hero;