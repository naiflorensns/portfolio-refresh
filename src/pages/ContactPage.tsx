import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;