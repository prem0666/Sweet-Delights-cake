import { Facebook, FacebookIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-primary">
                Sweet
              </span>
              <span className="text-2xl font-display font-bold text-vanilla">
                Delights
              </span>
            </div>
            <p className="text-vanilla/80 text-sm leading-relaxed">
              Crafting sweet memories since 2010. Every cake tells a story, let
              us be part of yours.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                
                 
                  

                <FacebookIcon className="w-5 h-5"/>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
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
                  className="lucide lucide-instagram h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
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
                  className="lucide lucide-twitter h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/reviews"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/products"
                >
                  Birthday Cakes
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/products"
                >
                  Wedding Cakes
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/products"
                >
                  Custom Designs
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/products"
                >
                  Cupcakes
                </Link>
              </li>
              <li>
                <Link
                  className="text-vanilla/80 hover:text-primary transition-colors text-sm"
                  to="/products"
                >
                  Pastries
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-vanilla/80 text-sm">
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
                  className="lucide lucide-map-pin h-5 w-5 text-primary shrink-0 mt-0.5"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>123 Baker Street, Sweet Town, ST 12345</span>
              </li>
              <li className="flex items-center gap-3 text-vanilla/80 text-sm">
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
                  className="lucide lucide-phone h-5 w-5 text-primary shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-vanilla/80 text-sm">
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
                  className="lucide lucide-mail h-5 w-5 text-primary shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>hello@sweetdelights.com</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-vanilla/20 my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-vanilla/60 text-sm">
          <p>© 2024 Sweet Delights. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
