import { Link } from "react-router-dom";

const RegisteredSessionCard = ({ session }) => {
  const formattedDate = new Date(session.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white border rounded-3xl shadow-sm p-6 hover:shadow-md transition">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold">
            {session.title}
          </h2>

          <p className="text-green-600 mt-1">
            {session.category}
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          Registered
        </span>

      </div>

      <div className="flex flex-wrap gap-6 mt-5 text-gray-600">

        <p>📅 {formattedDate}</p>

        <p>🕒 {session.startTime}</p>

        <p>
          {session.mode === "Online"
            ? "🌐 Online"
            : "📍 Offline"}
        </p>

        <p>
          👨‍🏫 {session.organizer.username}
        </p>

      </div>

      <div className="mt-6">

        <Link
          to={`/session/${session._id}`}
          className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
        >
          View Session
        </Link>

      </div>

    </div>
  );
};

export default RegisteredSessionCard;