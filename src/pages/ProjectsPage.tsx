import Portfolio from "@/components/Portfolio";
import Navbar from "@/components/Navbar";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Portfolio />
      </div>
    </div>
  );
};

export default ProjectsPage;