import React from "react";

const SessionDetails = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Banner */}
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="session"
        className="w-full h-[400px] object-cover rounded-3xl"
      />

      {/* Title */}
      <div className="mt-8">

        <h1 className="text-5xl font-bold">
          React Masterclass
        </h1>

        <p className="text-gray-500 mt-3">
          Hosted by Nitesh Singh
        </p>

      </div>

      {/* Session Info */}
      <div className="flex gap-8 mt-6 text-gray-600">

        <p>📅 15 June 2026</p>
        <p>⏰ 7:00 PM</p>
        <p>🌐 English</p>
        <p>💰 Free</p>

      </div>

      {/* Register Button */}
      <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
        Register Now
      </button>

      {/* About */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          About This Session
        </h2>

        <p className="text-gray-600 leading-8">
          Learn React from scratch and build modern web applications.
          This workshop covers components, props, state management,
          hooks and routing.
        </p>

      </div>

      {/* Takeaways */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          What You'll Learn
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ React Fundamentals</li>
          <li>✔ Components</li>
          <li>✔ Hooks</li>
          <li>✔ React Router</li>
        </ul>

      </div>

      {/* Prerequisites */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          Prerequisites
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>• Basic HTML</li>
          <li>• Basic CSS</li>
          <li>• Basic JavaScript</li>
        </ul>

      </div>

      {/* Host */}
      <div className="mt-12 p-6 border rounded-3xl">

        <h2 className="text-3xl font-bold mb-5">
          Host Information
        </h2>

        <div className="flex items-center gap-5">

          <img
            src=""
            alt="host"
            className="w-20 h-20 rounded-full"
          />

          <div>
            <h3 className="text-xl font-semibold">
              Nitesh Singh
            </h3>

            <p className="text-gray-500">
              Frontend Developer
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SessionDetails;