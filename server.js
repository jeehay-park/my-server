const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const configRoutes = require("./configRoutes"); // Import the config routes
const configInfoRoutes = require("./configInfoRoutes"); // Import the new config info routes

const app = express(); 
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use the separated route files
app.use("/ictk/issue/admin/config", configRoutes); 
app.use("/ictk/issue/admin/config", configInfoRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
