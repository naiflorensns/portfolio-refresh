import { cn } from "@/lib/utils";

interface MazeBackgroundProps {
  className?: string;
  opacity?: number;
}

const MazeBackground = ({ className, opacity = 0.1 }: MazeBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 50% / ${opacity}) 2px, transparent 2px),
            linear-gradient(90deg, hsl(210 100% 50% / ${opacity}) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Maze walls - decorative */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: opacity * 2 }}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="maze-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <rect x="0" y="0" width="60" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="100" y="0" width="60" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="40" y="40" width="80" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="0" y="80" width="40" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="60" y="80" width="40" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="120" y="80" width="40" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="20" y="120" width="60" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="100" y="120" width="40" height="4" fill="hsl(210 100% 50%)" rx="2"/>
            
            {/* Vertical lines */}
            <rect x="0" y="0" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="76" y="0" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="156" y="0" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="40" y="40" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="116" y="40" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="0" y="80" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="60" y="80" width="4" height="80" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="96" y="80" width="4" height="40" fill="hsl(210 100% 50%)" rx="2"/>
            <rect x="156" y="80" width="4" height="80" fill="hsl(210 100% 50%)" rx="2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#maze-pattern)" />
      </svg>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-secondary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-secondary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-secondary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-secondary/30" />
    </div>
  );
};

export default MazeBackground;