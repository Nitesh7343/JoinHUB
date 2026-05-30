import React from "react";
import {Link} from 'react-router-dom'
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

      <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        <Link to = "/session/1">
            <SessionCard />
        </Link>

        <SessionCard />

        <SessionCard />

      </div>
    </div>
  );
};

export default Sessions;
