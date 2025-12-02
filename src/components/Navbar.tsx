import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import PacmanCharacter from "./PacmanCharacter";
import Ghost from "./Ghost";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "START" },
    { path: "/about", label: "ABOUT" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/contact", label: "CONTACT" }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b-2 border-secondary py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <PacmanCharacter size={28} animated={false} />
            <span className="font-pixel text-xs text-primary neon-text hidden sm:block">
              NAJWA
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const ghosts: Array<"red" | "pink" | "cyan" | "orange"> = ["red", "pink", "cyan", "orange"];
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-2 sm:px-4 py-2 font-pixel text-[8px] sm:text-[10px] transition-all duration-200",
                    isActive 
                      ? "text-primary neon-text" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {isActive && (
                    <Ghost 
                      size={16} 
                      color={ghosts[index % 4]} 
                      className="absolute -top-5 left-1/2 -translate-x-1/2"
                      animated
                    />
                  )}
                  {item.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-neon-yellow" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;