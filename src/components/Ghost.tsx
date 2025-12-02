import { cn } from "@/lib/utils";

interface GhostProps {
  className?: string;
  size?: number;
  color?: "red" | "pink" | "cyan" | "orange";
  animated?: boolean;
}

const Ghost = ({ 
  className, 
  size = 40, 
  color = "red",
  animated = true 
}: GhostProps) => {
  const colorMap = {
    red: "hsl(0 100% 50%)",
    pink: "hsl(330 100% 70%)",
    cyan: "hsl(180 100% 50%)",
    orange: "hsl(30 100% 50%)"
  };

  const glowMap = {
    red: "0 0 15px hsl(0 100% 50% / 0.6)",
    pink: "0 0 15px hsl(330 100% 70% / 0.6)",
    cyan: "0 0 15px hsl(180 100% 50% / 0.6)",
    orange: "0 0 15px hsl(30 100% 50% / 0.6)"
  };

  return (
    <div 
      className={cn(
        "relative",
        animated && "animate-ghost-float",
        className
      )}
      style={{ width: size, height: size * 1.1 }}
    >
      <svg 
        viewBox="0 0 40 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          filter: `drop-shadow(${glowMap[color]})`,
          width: '100%',
          height: '100%'
        }}
      >
        {/* Ghost body */}
        <path 
          d="M20 0C8.954 0 0 8.954 0 20V36L5 31L10 36L15 31L20 36L25 31L30 36L35 31L40 36V20C40 8.954 31.046 0 20 0Z" 
          fill={colorMap[color]}
        />
        {/* Eyes */}
        <ellipse cx="12" cy="18" rx="5" ry="6" fill="white"/>
        <ellipse cx="28" cy="18" rx="5" ry="6" fill="white"/>
        {/* Pupils */}
        <ellipse cx="14" cy="19" rx="2.5" ry="3" fill="hsl(240 10% 10%)"/>
        <ellipse cx="30" cy="19" rx="2.5" ry="3" fill="hsl(240 10% 10%)"/>
      </svg>
    </div>
  );
};

export default Ghost;