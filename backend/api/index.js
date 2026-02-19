import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db.js";
// import Custom from '../routes/CustomRoutes.js'
import Custom from "../routes/CustomRoutes.js";
import Products from "../routes/Products.js";
import Contacts from "../routes/Contact.js";
import Users from "../routes/Users.js";


dotenv.config();
const app = express();
app.use(cors({
   origin: ["http://localhost:5173", "https://cakelive.netlify.app", "https://sweet-delights-cake-xi.vercel.app"],
  credentials: true
 }));
app.use(express.json());
app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api", Custom);
app.use("/api", Products);
app.use("/api", Contacts);
app.use("/api", Users);


const PORT =  process.env.port || 5000;
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// console.log("API Routes:");


// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("\n" + "🔴".repeat(30));
  console.error("GLOBAL ERROR HANDLER:");
  console.error("Error:", err.message);
  console.error("Stack:", err.stack);
  console.error("🔴".repeat(30) + "\n");
  
  res.status(err.status || 500).json({
    error: err.message,
    name: err.name
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

