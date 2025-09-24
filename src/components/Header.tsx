import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
    { name: "Policy", path: "/policy" },
    { name: "Login", path: "/login" },
    { name: "Profile", path: "/profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary smooth-hover hover:scale-105">
          MEETWISE
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`smooth-hover text-sm font-medium relative ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 ocean-gradient rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;