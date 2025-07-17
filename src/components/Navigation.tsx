import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Location", href: "#location" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-background border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-hero-green rounded-sm flex items-center justify-center">
            <div className="w-6 h-6 bg-text-light transform rotate-45 rounded-sm relative">
              <div className="absolute inset-1 bg-hero-green transform -rotate-45 rounded-sm"></div>
            </div>
          </div>
          <span className="text-xl font-semibold text-primary">Mind Haven</span>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-2 text-primary">
          <Phone className="w-4 h-4" />
          <span className="font-medium">0123456789</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
