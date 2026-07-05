import admin from "../config/firebase.js";
import User from "../models/User.js";

const protectOptional = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return next();
    }

    const token = authHeader.split(" ")[1];

    const decoded = await admin.auth().verifyIdToken(token);

    const user = await User.findOne({
      firebaseUID: decoded.uid,
    });

    if (user) {
      req.user = user;
    }

    next();

  } catch (error) {
    next();
  }
};

export default protectOptional;