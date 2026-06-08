import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import admin from "./config/firebase.js";
import authRoutes from "./routes/authRoutes.js";
import sessionRoutes from './routes/sessionRoutes.js'


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("JoinHub API Running");
});

app.get("/test", (req, res) => {
  res.send("Firebase Admin Connected");
});

app.use("/auth", authRoutes);
app.use("/sessions",sessionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});