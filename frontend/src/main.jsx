import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductList from './component/context/ProductList.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ProductList>
      <App />
    </ProductList>
  </BrowserRouter>
</StrictMode>
)
