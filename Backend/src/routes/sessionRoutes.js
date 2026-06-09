import express from 'express'

import { createSession, getAllSessions, getSessionByID } from '../controllers/sessionController.js'

import protect from '../middlewares/authMiddleware.js'

const router = express.Router();

router.post("/", protect, createSession);

router.get("/", getAllSessions);

router.get("/:id", getSessionByID);

export default router;