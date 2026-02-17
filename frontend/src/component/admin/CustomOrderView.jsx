import React from "react";
import { useproduct } from "../context/ProductList";

const CustomOrderView = () => {
    const {setShowCoutomOrder} = useproduct()
    
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80 "
        onClick={()=>{setShowCoutomOrder(false)}}
        style={{ pointerEvents: "auto" }}
      ></div>

      <div
        className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200  sm:rounded-lg max-w-lg"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            Custom Cake Order Details
          </h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Customer Name</p>
              <p className="font-medium">web dev</p>
            </div>
            <div>
              <p className="text-muted-foreground">Phone</p>
              <p>646789789</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email</p>
              <p>checker@company.com</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date</p>
              <p>27/01/2026</p>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Size</p>
              <p className="font-medium">1kg</p>
            </div>
            <div>
              <p className="text-muted-foreground">Flavor</p>
              <p className="font-medium capitalize">chocolate</p>
            </div>
            <div>
              <p className="text-muted-foreground">Shape</p>
              <p className="font-medium capitalize">round</p>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Message on Cake</p>
            <p className="font-medium">"qawserdtfyghuji"</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">
              Special Instructions
            </p>
            <p className="text-sm">fj</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-2">
              Reference Image
            </p>
            <img src="" className="max-h-48 rounded-lg" alt="gfd" />
            
          </div>
          
          <div className="pt-4 border-t flex justify-between items-center">
            
            <div>
              
              <p className="text-muted-foreground text-sm">
                 Estimated Price
              </p>
               <p className="text-xl font-bold text-accent"> ₹800</p>
              
            </div>
            
            <span className="px-3 py-1 rounded-full text-sm font-medium capitalize bg-blue-100 text-blue-700">
               quoted
            </span>
            
          </div>
          
        </div>
        
        <button
          type="button"
          onClick={()=>{setShowCoutomOrder(false)}}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          
          <svg
            xmlns="http:www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x h-4 w-4"
          >
             <path d="M18 6 6 18"> </path>
             <path d="m6 6 12 12"> </path>
            
          </svg>
           <span className="sr-only"> Close</span>
          
        </button>
        
      </div>
    </>
  );
};

export default CustomOrderView;
