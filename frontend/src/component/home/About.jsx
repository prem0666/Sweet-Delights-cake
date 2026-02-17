import React from "react";

const About = () => {
  return (
    <>
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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

                  className="lucide lucide-cake h-7 w-7 text-primary"
                >
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
                  <path d="M2 21h20"></path>
                  <path d="M7 8v3"></path>
                  <path d="M12 8v3"></path>
                  <path d="M17 8v3"></path>
                  <path d="M7 4h.01"></path>
                  <path d="M12 4h.01"></path>
                  <path d="M17 4h.01"></path>
                </svg>
              </div>
              <h3 className="font-display font-semibold text-foreground">
                Freshly Baked
              </h3>
              <p className="text-sm text-muted-foreground">
                Every cake is baked fresh on the day of delivery
              </p>
            </div>
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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

                  className="lucide lucide-truck h-7 w-7 text-primary"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </div>
              <h3 className="font-display font-semibold text-foreground">
                Free Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Free delivery on orders above ₹1000
              </p>
            </div>
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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

                  className="lucide lucide-award h-7 w-7 text-primary"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 className="font-display font-semibold text-foreground">
                Premium Quality
              </h3>
              <p className="text-sm text-muted-foreground">
                Made with finest ingredients and lots of love
              </p>
            </div>
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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

                  className="lucide lucide-clock h-7 w-7 text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="font-display font-semibold text-foreground">
                Same Day Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Order before 2 PM for same day delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
