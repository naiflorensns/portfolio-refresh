import { cn } from "@/lib/utils";

interface PacmanCharacterProps {
  className?: string;
  size?: number;
  direction?: "right" | "left" | "up" | "down";
  animated?: boolean;
}

const PacmanCharacter = ({ 
  className, 
  size = 40, 
  direction = "right",
  animated = true 
}: PacmanCharacterProps) => {
  const rotationMap = {
    right: 0,
    down: 90,
    left: 180,
    up: 270
  };

  return (
    <div 
      className={cn("relative", className)}
      style={{ 
        width: size, 
        height: size,
        transform: `rotate(${rotationMap[direction]}deg)`
      }}
    >
      {/* Pac-Man body */}
      <div 
        className={cn(
          "absolute inset-0 bg-primary rounded-full",
          animated && "animate-pacman-chomp"
        )}
        style={{
          clipPath: animated 
            ? undefined 
            : 'polygon(100% 0%, 100% 100%, 50% 50%)',
          boxShadow: '0 0 20px hsl(60 100% 50% / 0.5)'
        }}
      />
      {/* Eye */}
      <div 
        className="absolute bg-background rounded-full"
        style={{
          width: size * 0.15,
          height: size * 0.15,
          top: size * 0.15,
          left: size * 0.45
        }}
      />
    </div>
  );
};

export default PacmanCharacter;