import express from "express";
import protect from "../middlewares/authMiddleware.js";
import protectOptional from "../middlewares/protectOptional.js";
import {
  createSession,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
  searchSessions,
  getUpcomingSessions,
  getPastSessions,
  registerForSession,
  getMySessions,
  getMyRegisteredSessions,
} from "../controllers/sessionController.js";

const router = express.Router();

// Public Routes
router.get("/", protectOptional, getAllSessions);
router.get("/search", searchSessions);
router.get("/upcoming", getUpcomingSessions);
router.get("/past", getPastSessions);
router.get("/my-sessions", protect, getMySessions);
router.get("/my-registrations",protect,getMyRegisteredSessions);


// Protected Routes
router.get("/:id", protectOptional, getSessionById);
router.post("/", protect, createSession);
router.post("/:id/register", protect, registerForSession);
router.put("/:id", protect, updateSession);
router.delete("/:id", protect, deleteSession);

export default router;