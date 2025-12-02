import { cn } from "@/lib/utils";
import PacmanCharacter from "./PacmanCharacter";

interface PacmanDotsProps {
  className?: string;
  dotCount?: number;
  showPacman?: boolean;
}

const PacmanDots = ({ className, dotCount = 15, showPacman = true }: PacmanDotsProps) => {
  return (
    <div className={cn("relative w-full h-8 overflow-hidden", className)}>
      {/* Dots row */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {Array.from({ length: dotCount }).map((_, i) => (
          <div 
            key={i}
            className={cn(
              "pac-dot animate-dot-pulse",
              i === 0 || i === dotCount - 1 ? "power-pellet" : ""
            )}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Animated Pac-Man */}
      {showPacman && (
        <div className="absolute top-1/2 -translate-y-1/2 animate-pacman-move">
          <PacmanCharacter size={24} direction="right" />
        </div>
      )}
    </div>
  );
};

export default PacmanDots;