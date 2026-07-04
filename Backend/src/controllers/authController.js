import admin from "../config/firebase.js";
import User from "../models/User.js";

/**
 * Create or Sync Firebase user with MongoDB
 */
export const syncUser = async (req, res) => {
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

const firebaseProvider = decodedToken.firebase.sign_in_provider;

const provider =
  firebaseProvider === "google.com"
    ? "google"
    : firebaseProvider;

let user = await User.findOne({
  firebaseUID: decodedToken.uid,
});


    // Create user if first login
    if (!user) {
      user = await User.create({
        username:req.body.username ||decodedToken.name ||"New User",
        email: decodedToken.email,
        firebaseUID: decodedToken.uid,
        provider: provider,
        profilePicture: decodedToken.picture || "",
        isVerified: decodedToken.email_verified,
      });

      return res.status(201).json({
        success: true,
        message: "User created successfully.",
        user,
      });
    }

    // Update latest Firebase profile data
    user.username = req.body.username || decodedToken.name || user.username;
    user.profilePicture = decodedToken.picture || user.profilePicture;
    user.provider = provider || user.provider;
    user.isVerified = decodedToken.email_verified;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User synced successfully.",
      user,
    });
  } catch (error) {
    console.error("Sync User Error:", error);

return res.status(500).json({
  success: false,
  message: "Failed to sync user.",
});
  }
};

/**
 * Get Current Logged In User
 */
export const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};

/**
 * Update User Profile
 */
export const updateProfile = async (req, res) => {
  try {
    const { username, bio, phone, profession } = req.body;

    if (username) req.user.username = username;
    if (bio) req.user.bio = bio;
    if (phone) req.user.phone = phone;
    if (profession) req.user.profession = profession;

    await req.user.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete User Account
 */
export const deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Account deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};