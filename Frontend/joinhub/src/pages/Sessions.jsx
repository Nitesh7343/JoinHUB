import React from "react";
import SessionCard from "../components/SessionCard";

const Sessions = () => {
  return (
    <div className="px-10 py-10">
      {/* PAGE HEADING */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold">Explore Live Sessions</h1>

        <p className="text-gray-500 mt-3 text-lg">
          Join workshops, classes and interactive live sessions.
        </p>
      </div>

      {/* SESSIONS GRID */}

      <div className="grid grid-cols-3 gap-8">
        <SessionCard />

        <SessionCard />

        <SessionCard />

        <SessionCard />

        <SessionCard />

        <SessionCard />
      </div>
    </div>
  );
};

export default Sessions;
