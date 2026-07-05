import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import SessionCard from "../components/SessionCard";

const Sessions = () => {

const [sessions, setSessions] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const fetchSessions = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

const response = await axios.get(
  "http://localhost:8000/api/sessions",
  {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  }
);

    setSessions(response.data.sessions);

  } catch (error) {

    setError("Failed to load sessions.");

  } finally {

    setLoading(false);

  }
};

useEffect(() => {
  fetchSessions();
}, []);

  return (
    <div className="px-10 py-10">
      {/* PAGE HEADING */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold">Explore Live Sessions</h1>

        <p className="text-gray-500 mt-3 text-lg">
          Join workshops, classes and interactive live sessions.
        </p>
      </div>

      {loading && (
  <p className="text-center text-lg font-medium">
    Loading sessions...
  </p>
)}

{error && (
  <p className="text-center text-red-500">
    {error}
  </p>
)}

{!loading && sessions.length === 0 && (
  <div className="text-center py-16">
    <h2 className="text-2xl font-semibold">
      No sessions found
    </h2>

    <p className="text-gray-500 mt-2">
      Be the first one to organize a session.
    </p>
  </div>
)}

      {/* SESSIONS GRID */}

     {sessions.length > 0 && (
  <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
    {sessions.map((session) => (
      <Link
        key={session._id}
        to={`/session/${session._id}`}
      >
        <SessionCard session={session} />
      </Link>
    ))}
  </div>
)}
    </div>
  );
};

export default Sessions;
