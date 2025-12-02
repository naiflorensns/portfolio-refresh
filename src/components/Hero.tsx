import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MazeBackground from "./MazeBackground";
import PacmanCharacter from "./PacmanCharacter";
import PacmanDots from "./PacmanDots";
import Ghost from "./Ghost";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <MazeBackground opacity={0.08} />
      <div className="absolute top-20 left-10 animate-float"><Ghost size={50} color="red" /></div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "0.5s" }}><Ghost size={40} color="pink" /></div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "1s" }}><Ghost size={45} color="cyan" /></div>
      <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: "1.5s" }}><Ghost size={35} color="orange" /></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-40 h-40 mx-auto pixel-border bg-muted overflow-hidden animate-float">
                <img src={profilePhoto} alt="Najwa Alayya Fatharani" className="w-full h-full object-cover" />
              </div>
              <PacmanCharacter size={30} className="absolute -right-4 top-1/2 -translate-y-1/2" direction="left" />
            </div>
          </div>
          <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl text-primary mb-4 neon-text leading-relaxed">NAJWA ALAYYA<br />FATHARANI</h1>
          <p className="font-pixel text-[10px] sm:text-xs text-secondary mb-4 neon-text-blue tracking-wider">— CREATIVE PORTFOLIO —</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">Graphic Designer • Videographer • Creative Thinker</p>
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center"><p className="font-pixel text-[8px] text-secondary mb-1">HIGH SCORE</p><p className="font-pixel text-sm text-primary neon-text">999999</p></div>
            <div className="text-center"><p className="font-pixel text-[8px] text-secondary mb-1">LEVEL</p><p className="font-pixel text-sm text-primary neon-text">MAX</p></div>
          </div>
          <Button onClick={() => navigate("/projects")} className="arcade-btn px-8 py-4 text-sm">ENTER PORTFOLIO</Button>
          <p className="font-pixel text-[8px] text-muted-foreground mt-8 animate-neon-flicker">PRESS START TO BEGIN</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0"><PacmanDots dotCount={20} /></div>
    </section>
  );
};
export default Hero;