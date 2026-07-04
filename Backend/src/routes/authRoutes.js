import express from "express";

import {
  syncUser,
  getCurrentUser,
  updateProfile,
  deleteAccount,
} from "../controllers/authController.js";

import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create user / Login user
router.post("/sync-user", syncUser);

// Logged in user
router.get("/me", protect, getCurrentUser);

// Update profile
router.put("/profile", protect, updateProfile);

// Delete account
router.delete("/profile", protect, deleteAccount);

export default router;