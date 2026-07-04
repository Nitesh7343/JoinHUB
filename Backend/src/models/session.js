// import mongoose from "mongoose";

// const sessionSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },

//     category: {
//       type: String,
//       required: true,
//     },

//     date: {
//       type: Date,
//       required: true,
//     },

//     language: {
//       type: String,
//       default: "English",
//     },

//     isPaid: {
//       type: Boolean,
//       default: false,
//     },

//     price: {
//       type: Number,
//       default: 0,
//     },

//     host: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("Session", sessionSchema);