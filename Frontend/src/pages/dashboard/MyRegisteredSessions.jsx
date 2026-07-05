import React, { useEffect, useState } from "react";
import axios from "axios";
import RegisteredSessionCard from "../../components/RegisteredSessionCard";

const MyRegisteredSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRegisteredSessions = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8000/api/sessions/my-registrations",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSessions(response.data.sessions);

    } catch (error) {

      setError("Failed to load registered sessions.");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchRegisteredSessions();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        My Registered Sessions
      </h1>

      {sessions.length === 0 ? (
        <div className="text-center py-16">

          <h2 className="text-2xl font-semibold">
            You haven't registered for any sessions yet.
          </h2>

          <p className="text-gray-500 mt-2">
            Explore sessions and start learning.
          </p>

        </div>
      ) : (
        sessions.map((session) => (
          <RegisteredSessionCard
            key={session._id}
            session={session}
          />
        ))
      )}

    </div>
  );
};

export default MyRegisteredSessions;