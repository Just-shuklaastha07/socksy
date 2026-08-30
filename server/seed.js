const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Everyday Crew",
    description: "Soft everyday socks made for all-day comfort.",
    price: 299,
    image: "/images/everyday-crew.jpg",
    category: "Everyday",
    stock: 25,
  },
  {
    name: "Sport Flex",
    description: "Breathable performance socks for active days.",
    price: 349,
    image: "/images/sport-flex.jpg",
    category: "Sports",
    stock: 20,
  },
  {
    name: "Cozy Clouds",
    description: "Super-soft socks for maximum comfort.",
    price: 399,
    image: "/images/cozy-clouds.jpg",
    category: "Comfy",
    stock: 18,
  },
  {
    name: "Rainbow Pop",
    description: "Colorful socks to brighten up your outfit.",
    price: 279,
    image: "/images/rainbow-pop.jpg",
    category: "Fun",
    stock: 30,
  },
  {
    name: "Classic Black",
    description: "A clean and classic pair for every occasion.",
    price: 249,
    image: "/images/classic-black.jpg",
    category: "Everyday",
    stock: 35,
  },
  {
    name: "Street Style",
    description: "Bold socks for a bold everyday look.",
    price: 329,
    image: "/images/street-style.jpg",
    category: "Fun",
    stock: 22,
  },
  {
    name: "Athletic Pro",
    description: "Designed for workouts, running and training.",
    price: 449,
    image: "/images/athletic-pro.jpg",
    category: "Sports",
    stock: 15,
  },
  {
    name: "Winter Warmers",
    description: "Warm and cozy socks for chilly days.",
    price: 499,
    image: "/images/winter-warmers.jpg",
    category: "Comfy",
    stock: 12,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected ✅");

    // Prevent duplicates if you run this again
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Socksy products added successfully 🧦");

    process.exit();
  } catch (error) {
    console.error("Failed to seed products:", error);
    process.exit(1);
  }
};

seedProducts();