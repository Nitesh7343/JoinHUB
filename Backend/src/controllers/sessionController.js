import Session from "../models/Session.js";
import protectOptional from "../middlewares/protectOptional.js";

/**
 * Create a new session
 * POST /api/sessions
 */
export const createSession = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      mode,
      venue,
      date,
      startTime,
      endTime,
      maxParticipants,
      price,
      thumbnail,
    } = req.body;

    // Basic Validation
    if (
      !title ||
      !category ||
      !mode ||
      !date ||
      !startTime ||
      !maxParticipants
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Offline session must have venue
    if (mode === "Offline" && !venue) {
      return res.status(400).json({
        success: false,
        message: "Venue is required for offline sessions.",
      });
    }

    const session = await Session.create({
      title,
      description,
      category,
      mode,
      venue,
      date,
      startTime,
      endTime,
      maxParticipants,
      price,
      thumbnail,
      organizer: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Session created successfully.",
      session,
    });
  } catch (error) {
    console.error("Create Session Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create session.",
    });
  }
};

export const getAllSessions = async (req, res) => {
  try {
    let query = {
      status: "Published",
    };

    // If user is logged in, don't show their own sessions
    if (req.user) {
      query.organizer = { $ne: req.user._id };
    }

    const sessions = await Session.find(query)
      .populate("organizer", "username profilePicture")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: sessions.length,
      sessions,
    });

  } catch (error) {

    console.error("Get Sessions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch sessions.",
    });

  }
};

export const getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({
      organizer: req.user._id,
    }).sort({ date: 1 });

    return res.status(200).json({
      success: true,
      count: sessions.length,
      sessions,
    });

  } catch (error) {

    console.error("My Sessions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch your sessions.",
    });

  }
};

export const getMyRegisteredSessions = async (req, res) => {
  try {
    const sessions = await Session.find({
      registeredUsers: req.user._id,
    })
      .populate("organizer", "username profilePicture")
      .sort({ date: 1 });

    return res.status(200).json({
      success: true,
      count: sessions.length,
      sessions,
    });

  } catch (error) {

    console.error("Registered Sessions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch registered sessions.",
    });

  }
};

export const getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate(
        "organizer",
        "username profilePicture bio profession"
      );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found.",
      });
    }

    let isOrganizer = false;
    let isRegistered = false;

    if (req.user) {
      isOrganizer =
        session.organizer._id.toString() === req.user._id.toString();

      isRegistered = session.registeredUsers.some(
        (userId) => userId.toString() === req.user._id.toString()
      );
    }

    const isFull =
      session.registeredUsers.length >= session.maxParticipants;

    return res.status(200).json({
      success: true,
      session,
      isOrganizer,
      isRegistered,
      isFull,
    });

  } catch (error) {

    console.error("Get Session Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch session.",
    });

  }
};

export const updateSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found.",
      });
    }


    // Only organizer can update
    if (session.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this session.",
      });
    }

    Object.assign(session, req.body);

    await session.save();

    return res.status(200).json({
      success: true,
      message: "Session updated successfully.",
      session,
    });

  } catch (error) {

    console.error("Update Session Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update session.",
    });

  }
};

export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found.",
      });
    }

    // Only organizer can delete
    if (session.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this session.",
      });
    }

    await Session.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Session deleted successfully.",
    });

  } catch (error) {

    console.error("Delete Session Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete session.",
    });

  }
};

export const searchSessions = async (req, res) => {
  res.json({ message: "Search sessions" });
};

export const getUpcomingSessions = async (req, res) => {
  res.json({ message: "Upcoming sessions" });
};

export const getPastSessions = async (req, res) => {
  res.json({ message: "Past sessions" });
};

export const registerForSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found.",
      });
    }

    // Check if user already registered
    if (session.registeredUsers.includes(req.user._id)) {
      return res.status(400).json({
        success: false,
        message: "You are already registered for this session.",
      });
    }

    // Check session capacity
    if (
      session.registeredUsers.length >= session.maxParticipants
    ) {
      return res.status(400).json({
        success: false,
        message: "Session is full.",
      });
    }

    // Register user
    session.registeredUsers.push(req.user._id);

    await session.save();

    return res.status(200).json({
      success: true,
      message: "Successfully registered for the session.",
    });

  } catch (error) {

    console.error("Register Session Error:", error);

    return res.status(500).json({
      success: false,
      message: "Registration failed.",
    });

  }
};