const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Najwa Alayya Fatharani. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-80">
          Graphic Designer & Videographer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
