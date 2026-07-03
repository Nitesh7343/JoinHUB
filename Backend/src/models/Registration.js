import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    // User who registered
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Session being registered for
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },

    // Free or Paid Registration
    registrationType: {
      type: String,
      enum: ["Free", "Paid"],
      required: true,
    },

    // Payment Status
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed", "Refunded"],
      default: "Pending",
    },

    // Has the attendee actually joined?
    attendanceStatus: {
      type: String,
      enum: ["Registered", "Attended", "Absent", "Cancelled"],
      default: "Registered",
    },

    // Registration timestamp
    registeredAt: {
      type: Date,
      default: Date.now,
    },

    // Check-in time (optional)
    joinedAt: {
      type: Date,
    },

    // User can rate session after completion
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    feedback: {
      type: String,
      default: "",
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate registrations
registrationSchema.index(
  { user: 1, session: 1 },
  { unique: true }
);

// Useful indexes
registrationSchema.index({ session: 1 });
registrationSchema.index({ user: 1 });

export default mongoose.model("Registration", registrationSchema);