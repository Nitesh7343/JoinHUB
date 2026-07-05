import React from 'react'

const SessionCard = ({ session }) => {

  const formattedDate = new Date(session.date).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const priceText = session.price > 0 ? `₹${session.price}` : "Free";

const defaultImages = {
  "Web Development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

  Programming:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

  DSA:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

  "AI & Machine Learning":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995",

  "Data Science":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

  "Cloud Computing":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

  "Cyber Security":
    "https://images.unsplash.com/photo-1563986768609-322da13575f3",

  Fitness:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",

  Music:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",

  Dance:
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",

  Business:
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf",

  Other:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
};

  return (

    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

      {/* THUMBNAIL */}
     <img
  src={
    session.thumbnail ||
    defaultImages[session.category] ||
    defaultImages["Other"]
  }
  alt={session.title}
  className="w-full h-52 object-cover"
/>

      {/* CONTENT */}
      <div className="p-5">

        {/* CATEGORY */}
        <p className="text-green-600 font-medium text-sm">
          {session.category}
        </p>

        {/* TITLE */}
        <h1 className="text-2xl font-bold mt-2">
          {session.title}
        </h1>

        {/* HOST */}
        <div className="flex items-center justify-between mt-2">

  <p className="text-gray-500">
    Hosted by {session.organizer.username}
  </p>

  <span className="text-sm text-gray-600">
    👥 {session.maxParticipants}
  </span>

</div>

        {/* DATE */}
        <div className="flex items-center justify-between mt-2">

  <p className="text-gray-500">
    {formattedDate} • {session.startTime}
  </p>

  <span
    className={`text-sm px-3 py-1 rounded-full font-medium ${
      session.mode === "Online"
        ? "bg-blue-100 text-blue-700"
        : "bg-orange-100 text-orange-700"
    }`}
  >
    {session.mode}
  </span>

</div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-6">

          <p className="font-bold text-lg">
            {priceText}
          </p>

          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">

            Register

          </button>

        </div>

      </div>

    </div>

  )
}

export default SessionCard
