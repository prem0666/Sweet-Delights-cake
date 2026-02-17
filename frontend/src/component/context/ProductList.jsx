import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const productcontext = createContext();
import chocolate from "../../assets/product-chocolate.jpg";
import strawberry from "../../assets/product-strawberry.jpg";
import wedding from "../../assets/product-wedding.jpg";
import rainbow from "../../assets/product-rainbow.jpg";
import redvelvet from "../../assets/product-redvelvet.jpg";
import Api from "../api/Api";
// import { set } from "mongoose";

const product = [
  {
    id: 1,
    name: "Classic Chocolate Dream",
    category: "birthday",
    description: "Rich Belgian chocolate layers with ganache frosting",
    price: 1200,
    image: chocolate,
  },
  {
    id: 2,
    name: "Strawberry Bliss",
    category: "birthday",
    description: "Fresh strawberry cake with cream cheese frosting",
    price: 1400,
    image: strawberry,
  },
  {
    id: 3,
    name: "Elegant White Rose",
    category: "wedding",
    description: "Three-tier vanilla cake with buttercream roses",
    price: 3500,
    image: wedding,
  },
  {
    id: 4,
    name: "Royal Gold Wedding",
    category: "wedding",
    description: "Five-tier masterpiece with edible gold accents",
    price: 5000,
    image: wedding,
  },
  {
    id: 5,
    name: "Rainbow Surprise",
    category: "custom",
    description: "Colorful rainbow layers with vanilla buttercream",
    price: 1800,
    image: rainbow,
  },
  {
    id: 6,
    name: "Red Velvet Passion",
    category: "birthday",
    description: "Classic red velvet with cream cheese frosting",
    price: 1500,
    image: redvelvet,
  },
];




const ProductList = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [ShowCustomOrder, setShowCoutomOrder] = useState(false)
  const [products, setProducts] = useState([]);
  const [ showProductView, setShowProductView] = useState(false)
  const Product1 = async()=>{
  try{

    const response = await Api.get("/products")
    setProducts(response.data)
  }
  catch(error){ 
    console.error(error.message);
  }
}



useEffect(() => {
  Product1()
}, [])


// console.log(products);
  return (
    <productcontext.Provider value={{ products, setProducts, cart, setCart , ShowCustomOrder ,setShowCoutomOrder ,showProductView , setShowProductView}}>
      {children}
    </productcontext.Provider>
  );
};

export default ProductList;

export function useproduct() {
  return useContext(productcontext);
}
