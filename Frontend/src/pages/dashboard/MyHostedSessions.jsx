import React, { useEffect, useState } from "react";
import axios from "axios";
import HostedSessionCard from "../../components/HostedSessionCard";
import { toast } from "react-toastify";

const MyHostedSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMySessions = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8000/api/sessions/my-sessions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSessions(response.data.sessions);

    } catch (error) {

      setError("Failed to load your sessions.");

    } finally {

      setLoading(false);

    }
  };

  const handleDelete = async (sessionId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this session?"
  );

  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem("token");

    const response = await axios.delete(
      `http://localhost:8000/api/sessions/${sessionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success(response.data.message);

    // Remove deleted session instantly
    setSessions((prevSessions) =>
      prevSessions.filter((session) => session._id !== sessionId)
    );

  } catch (error) {

    toast.error(
      error.response?.data?.message || "Failed to delete session."
    );

  }
};

  useEffect(() => {
    fetchMySessions();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        My Hosted Sessions
      </h1>

      {sessions.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold">
            You haven't hosted any sessions yet.
          </h2>
        </div>
      ) : (
        sessions.map((session) => (
          <HostedSessionCard
  key={session._id}
  session={session}
  onDelete={handleDelete}
/>
        ))
      )}

    </div>
  );
};

export default MyHostedSessions;