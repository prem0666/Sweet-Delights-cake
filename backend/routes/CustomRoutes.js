import express from "express";
import CustomCake from "../modules/CustomCake.js";
import upload from "../middleware/upload.js";
import { authenticateToken, requireAdmin } from "../middleware/auth.js";

const Custom = express.Router();

Custom.get("/custom", async (req, res) => {
  try {
    const data = await CustomCake.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

Custom.post(
  "/custom",
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: "Image required" });

      const { name, email, phone, cakeSize, flavor, shape, message, instruction } = req.body;
      if (!name || !email || !phone) return res.status(400).json({ error: "Missing required fields" });
      if (!cakeSize || !flavor || !shape) return res.status(400).json({ error: "Missing selections" });

      const newCake = new CustomCake({
        name: String(name).trim(),
        email: String(email).trim(),
        phone: Number(phone),
        cakeSize: Number(cakeSize),
        flavor: Number(flavor),
        shape: Number(shape),
        message: String(message || "").trim(),
        instruction: String(instruction || "").trim(),
        imageUrl: req.file.path,
      });

      const savedCake = await newCake.save();
      res.status(201).json({ success: true, id: savedCake._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

Custom.delete("/custom/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await CustomCake.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Not found in DB" });
    }

    res.json({ message: "Deleted successfully", deleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default Custom;
