import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    // User who made the payment
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Session for which payment is made
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },

    // Registration linked to this payment
    registration: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
      required: true,
    },

    // Amount paid
    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    // Currency
    currency: {
      type: String,
      default: "INR",
      uppercase: true,
      trim: true,
    },

    // Payment Gateway
    gateway: {
      type: String,
      enum: ["Razorpay", "Stripe"],
      default: "Razorpay",
    },

    // Razorpay Order ID
    orderId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Razorpay Payment ID
    paymentId: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values
      trim: true,
    },

    // Razorpay Signature
    signature: {
      type: String,
      default: "",
      trim: true,
    },

    // Payment Status
    status: {
      type: String,
      enum: ["Pending", "Success", "Failed", "Refunded"],
      default: "Pending",
    },

    // Payment Method
    paymentMethod: {
      type: String,
      enum: [
        "UPI",
        "Card",
        "NetBanking",
        "Wallet",
        "EMI",
        "Unknown",
      ],
      default: "Unknown",
    },

    // Refund Details
    refundId: {
      type: String,
      default: "",
    },

    refundAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
paymentSchema.index({ user: 1 });
paymentSchema.index({ session: 1 });
paymentSchema.index({ registration: 1 });
paymentSchema.index({ orderId: 1 });
paymentSchema.index({ paymentId: 1 });

export default mongoose.model("Payment", paymentSchema);