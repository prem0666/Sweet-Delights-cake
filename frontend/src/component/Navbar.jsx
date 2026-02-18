import { useState, useEffect } from "react";
import { useproduct } from "./context/ProductList";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/Auth";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { cart } = useproduct();
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${isScrolled ? "backdrop-blur-md bg-background/80 shadow-md" : "bg-transparent shadow-none"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link className="flex items-center gap-2" to="/">
            <span className="text-2xl md:text-3xl font-display font-bold text-primary">
              Sweet
            </span>
            <span className="text-2xl md:text-3xl font-display font-bold text-accent">
              Delights
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="relative font-medium transition-colors hover:text-primary text-primary"
              to="/"
            >
              Home
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
            </Link>
            <Link
              className="relative font-medium transition-colors hover:text-primary text-foreground/80"
              to="/products"
            >
              Products
            </Link>
            {/* <a
                className="relative font-medium transition-colors hover:text-primary text-foreground/80"
                to="/reviews"
              >
                Reviews
              </a> */}
            <Link
              className="relative font-medium transition-colors hover:text-primary text-foreground/80"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/cart">
              <button className="inline-flex items-center justify-center text-foreground/80 gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 197.7 166"
                  width="30"
                  height="30"
                  fill="currentColor"
                  preserveAspectRatio="xMinYMax meet"
                >
                  <path d="M197.9 55.9L169.9 127.4H64.5L27.6 29.8H0V16.7H36.5L73.4 114.3H160.9L183 55.9Z" />
                  <circle cx="143.8" cy="153" r="13" />
                  <circle cx="90.8" cy="153" r="13" />
                  <text
                    x="116"
                    y="35"
                    dy=".48em"
                    textAnchor="middle"
                    className="fill-primary text-[100px]  font-semibold"
                  >
                    {cart.length}
                  </text>
                </svg>
              </button>
            </Link>
            {!isAuthenticated ? (
              <Link className="hidden md:block" to="/login">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user h-4 w-4 mr-2"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Login
                </button>
              </Link>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                {user?.role === "admin" && (
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-9 rounded-md px-3"
                    onClick={() => navigate("/admin")}
                  >
                    Admin
                  </button>
                )}
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground h-9 rounded-md px-3"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </div>
            )}
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
              type="button"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                
                className="lucide lucide-menu h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
