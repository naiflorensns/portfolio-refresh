import About from "@/components/About";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;