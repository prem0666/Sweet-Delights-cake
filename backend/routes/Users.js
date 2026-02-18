import express from "express";
import User from "../modules/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password)
      return res.status(400).json({ error: "Missing fields" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // All new users get role: "user" by default
    // Developers can set admin role using /api/admin/make-admin endpoint
    const user = new User({ name, email, phone, password: hash, role: "user" });
    console.log("Registering user:", { name, email, phone, role: "user" });
    await user.save();

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });

    res.status(201).json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
  //   console.log("BODY:", req.body);
  //     console.log("=== LOGIN HIT ===");
  // console.log("Headers:", req.headers);
  // console.log("Body:", req.body);
    const { email, password } = req.body ;
    if (!email || !password) return res.status(400).json({ error: "Missing fields" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ error: "Invalid credentials" });

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });

    res.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Developer endpoint: Create user/admin account via Postman
// POST /api/auth/create-admin with { name, email, phone, password, role }
router.post("/auth/create-admin", async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role)
      return res.status(400).json({ error: "Missing fields: name, email, phone, password, role" });

    if (!['user', 'admin'].includes(role))
      return res.status(400).json({ error: "Role must be 'user' or 'admin'" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({ name, email, phone, password: hash, role });
    console.log("Developer created user:", { name, email, phone, role });
    await user.save();

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });

    res.status(201).json({ 
      message: `User created successfully with role: ${role}`,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }, 
      token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
