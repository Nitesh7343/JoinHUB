import { Link } from "react-router-dom";

const HostedSessionCard = ({ session, onDelete  }) => {
  const formattedDate = new Date(session.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white border rounded-3xl shadow-sm p-6 hover:shadow-md transition">

      {/* Title */}
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold">
            {session.title}
          </h2>

          <p className="text-gray-500 mt-1">
            {session.category}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
  session.status === "Published"
    ? "bg-green-100 text-green-700"
    : session.status === "Completed"
    ? "bg-blue-100 text-blue-700"
    : "bg-red-100 text-red-700"
}`}
        >
          {session.status}
        </span>

      </div>

      {/* Info */}
      <div className="flex flex-wrap gap-6 mt-5 text-gray-600">

        <p>📅 {formattedDate}</p>

        <p>🕒 {session.startTime}</p>

        <p>
          {session.mode === "Online" ? "🌐 Online" : "📍 Offline"}
        </p>

        <p>
          👥 {session.registeredUsers.length} / {session.maxParticipants}
        </p>
        <p>
  💰 {session.price > 0 ? `₹${session.price}` : "Free"}
</p>

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">

        <Link
          to={`/session/${session._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          View
        </Link>

       <Link
  to={`/dashboard/edit-session/${session._id}`}
  className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600"
>
  Edit
</Link>

        <button
  onClick={() => onDelete(session._id)}
  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
>
  Delete
</button>

      </div>

    </div>
  );
};

export default HostedSessionCard;