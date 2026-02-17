import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// import hero form "../assets/"
import hero1 from "../../assets/hero-cake-1.jpg";
import hero2 from "../../assets/hero-cake-2.jpg";
import hero3 from "../../assets/hero-cake-3.jpg";



const slides = [
  {
    image: hero1,
    title: 'Celebrate Sweet Moments',
    subtitle: 'Handcrafted cakes made with love and the finest ingredients',
    cta: 'Order Now',
    link: '/products',
  },
  {
    image: hero2,
    title: 'Perfect Wedding Cakes',
    subtitle: 'Make your special day even more memorable',
    cta: 'View Collection',
    link: '/products?category=wedding',
  },
  {
    image: hero3,
    title: 'Delightful Cupcakes',
    subtitle: 'Miniature masterpieces for every occasion',
    cta: 'Explore Menu',
    link: '/products?category=cupcakes',
  },
];

 function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* <img src='../assets/hero-cake-1.jpg'/> */}
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-chocolate/70 via-chocolate/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div
              className={`max-w-xl space-y-6 transition-all duration-700 delay-300 ${
                index === currentSlide
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-vanilla/90">
                {slide.subtitle}
              </p>
              <div className="flex gap-4">
                
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gradient-primary shadow-elevated hover:scale-105 transition-transform">{slide.cta}</button>
                
                
                  <button className="inline-flex items-center  text-black justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-primary-foreground text-black hover:bg-primary-foreground/10">Custom Cake</button>
                
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/50 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/50 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}


export default Slider