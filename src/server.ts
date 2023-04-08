import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("App is working as expected!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});