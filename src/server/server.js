require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000"
}));
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);

// Connect DB (optional)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> console.log("MongoDB connected"))
  .catch(err => console.warn("MongoDB connection error:", err.message));
}

// Health
app.get("/", (req, res) => res.send("Portfolio contact server running"));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
