import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    firebaseUID: {
      type: String,
      required: true,
      unique: true,
    },

    provider: {
      type: String,
      enum: ["email", "google"],
      default: "email",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
      maxlength: 250,
    },

    phone: {
      type: String,
      default: "",
    },

    profession: {
      type: String,
      default: "",
    },

    // Sessions created by this user
    sessionsHosted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    ],

    // Sessions joined by this user
    sessionsJoined: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    ],

    // Saved recordings/sessions
    savedSessions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    ],

    totalSpent: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalEarned: {
      type: Number,
      default: 0,
      min: 0,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    // sessions: {
    //   info:{

    //   }
    // }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);