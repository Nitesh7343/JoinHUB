import admin from "../config/firebase.js";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is missing.",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify Firebase ID Token
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Find user in MongoDB
    const user = await User.findOne({
      firebaseUID: decodedToken.uid,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found in database.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired Firebase token.",
    });
  }
};

export default protect;