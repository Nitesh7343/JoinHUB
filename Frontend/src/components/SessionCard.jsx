import React from 'react'

const SessionCard = () => {
  return (

    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200">

      {/* THUMBNAIL */}
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="session"
        className="w-full h-52 object-cover"
      />

      {/* CONTENT */}
      <div className="p-5">

        {/* CATEGORY */}
        <p className="text-green-600 font-medium text-sm">
          Web Development
        </p>

        {/* TITLE */}
        <h1 className="text-2xl font-bold mt-2">
          React Masterclass
        </h1>

        {/* HOST */}
        <p className="text-gray-500 mt-2">
          Hosted by Nitesh Singh
        </p>

        {/* DATE */}
        <p className="text-gray-500 mt-1">
          28 May • 7:00 PM
        </p>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-6">

          <p className="font-bold text-lg">
            Free
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
