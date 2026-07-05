import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },


    venue: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      required: true,
    },

    startTime: {
      type: String,
      required: true,
    },

    endTime: {
      type: String,
      default: "",
    },

    maxParticipants: {
      type: Number,
      required: true,
      min: 1,
    },

    registeredUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    status: {
  type: String,
  enum: ["Draft", "Published", "Completed", "Cancelled"],
  default: "Published",
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Session", sessionSchema);