import express from 'express';
import Product from '../modules/Product.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import upload from '../middleware/upload.js';


const Products = express.Router();

Products.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
    } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

Products.post('/products', authenticateToken, requireAdmin, upload.single('imageUrl'), async (req, res) => {
  try {
      if (!req.file) return res.status(400).json({ error: "Image required" });
    const imageUrl = req.file.path; // Assuming the image URL is stored in the file path
    const { name, price, category, Description, } = req.body;
    const newProduct = new Product({
      name,
      price,
      category,
      Description,
      imageUrl
    });
    await newProduct.save();
    res.status(201).json(newProduct);
    // console.log(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
});

// admin-only delete product
Products.delete('/products/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message : "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




export default Products;