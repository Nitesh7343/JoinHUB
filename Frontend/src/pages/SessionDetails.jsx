import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SessionDetails = () => {

const { id } = useParams();

const [session, setSession] = useState(null);
const [isRegistered, setIsRegistered] = useState(false);
const [isOrganizer, setIsOrganizer] = useState(false);
const [isFull, setIsFull] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");  

const fetchSession = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

const response = await axios.get(
  `http://localhost:8000/api/sessions/${id}`,
  {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  }
);

    setSession(response.data.session);
    setIsOrganizer(response.data.isOrganizer);
setIsRegistered(response.data.isRegistered);
setIsFull(response.data.isFull);

  } catch (error) {

    setError("Failed to load session.");

  } finally {

    setLoading(false);

  }
};

const handleRegister = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      return;
    }

    const response = await axios.post(
      `http://localhost:8000/api/sessions/${id}/register`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success(response.data.message);

    // Refresh session data
    fetchSession();

  } catch (error) {

    toast.error(
  error.response?.data?.message || "Registration failed."
);

  }
};

useEffect(() => {
  fetchSession();
}, [id]);

if (loading) {
  return (
    <div className="text-center py-20 text-xl">
      Loading session...
    </div>
  );
}

if (error) {
  return (
    <div className="text-center py-20 text-red-500">
      {error}
    </div>
  );
}
console.log(session);
const formattedDate = new Date(session.date).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const priceText = session.price > 0 ? `₹${session.price}` : "Free";

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Banner */}
      <img
  src={
    session.thumbnail ||
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  }
  alt={session.title}
  className="w-full h-[400px] object-cover rounded-3xl"
/>

      {/* Title */}
      <div className="mt-8">

        <h1 className="text-5xl font-bold">
  {session.title}
</h1>

        <p className="text-gray-500 mt-3">
  Hosted by {session.organizer.username}
</p>

      </div>

      {/* Session Info */}
      <div className="flex flex-wrap gap-8 mt-6 text-gray-600">

  <p>📅 {formattedDate}</p>

  <p>⏰ {session.startTime}</p>

  <p>
    {session.mode === "Online" ? "🌐 Online" : "📍 Offline"}
  </p>

  <p>💰 {priceText}</p>

</div>

      {/* Register Button */}
      {isOrganizer ? (
  <button
    disabled
    className="mt-8 bg-gray-400 text-white px-8 py-3 rounded-full cursor-not-allowed"
  >
    👑 You are the Organizer
  </button>
) : isRegistered ? (
  <button
    disabled
    className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full cursor-not-allowed"
  >
    ✅ Registered
  </button>
) : isFull ? (
  <button
    disabled
    className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full cursor-not-allowed"
  >
    🚫 Session Full
  </button>
) : (
  <button
    onClick={handleRegister}
    className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
  >
    Register Now
  </button>
)}

      {/* Session Overview */}
<div className="mt-10 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">

  <h2 className="text-2xl font-bold mb-6">
    📊 Session Overview
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

    <div>
      <p className="text-gray-500 text-sm">Category</p>
      <p className="font-semibold">{session.category}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Mode</p>
      <p className="font-semibold">{session.mode}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Price</p>
      <p className="font-semibold">{priceText}</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Capacity</p>
      <p className="font-semibold">
        👥 {session.maxParticipants}
      </p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Registered</p>
      <p className="font-semibold">
        {session.registeredUsers.length}
      </p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Status</p>
      <p className="font-semibold">
        {session.status}
      </p>
    </div>

  </div>

</div>

      {/* About */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          About This Session
        </h2>

       <p className="text-gray-600 leading-8">
  {session.description || "No description provided."}
</p>

      </div>

      {/* Takeaways */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          What You'll Learn
        </h2>

        <ul className="space-y-3 text-gray-700">
  {session.learningOutcomes ? (
    session.learningOutcomes
      .split("\n")
      .filter((item) => item.trim() !== "")
      .map((item, index) => (
        <li key={index}>✔ {item}</li>
      ))
  ) : (
    <li>No learning outcomes provided.</li>
  )}
</ul>

      </div>

      {/* Prerequisites */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          Prerequisites
        </h2>

        <ul className="space-y-3 text-gray-700">
  {session.prerequisites ? (
    session.prerequisites
      .split("\n")
      .filter((item) => item.trim() !== "")
      .map((item, index) => (
        <li key={index}>• {item}</li>
      ))
  ) : (
    <li>No prerequisites.</li>
  )}
</ul>

      </div>

      {/* Host */}
      <div className="mt-12 p-6 border rounded-3xl">

        <h2 className="text-3xl font-bold mb-5">
          Host Information
        </h2>

        <div className="flex items-center gap-5">

          <img
  src={
    session.organizer.profilePicture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      session.organizer.username
    )}`
  }
  alt={session.organizer.username}
  className="w-20 h-20 rounded-full object-cover"
/>

          <div>
            <h3 className="text-xl font-semibold">
  {session.organizer.username}
</h3>

            <p className="text-gray-500">
  {session.organizer.profession || "JoinHUB Instructor"}
</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SessionDetails;