import mongoose from "mongoose";

const CustomCakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  cakeSize: {
    type: Number,
    required: true,
  },
  flavor: {
    type: Number,
    required: true,
  },
  shape: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    required: true,
  },
  instruction: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Custom", CustomCakeSchema);
