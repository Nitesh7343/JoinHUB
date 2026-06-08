import React from 'react'

const UpcomingSessions = () => {

  const hostingSessions = [
    {
      id: 1,
      title: "React Masterclass",
      date: "15 June 2026",
      time: "7:00 PM",
      registrations: 42
    }
  ]

  const registeredSessions = [
    {
      id: 2,
      title: "AI Workshop",
      date: "18 June 2026",
      time: "8:00 PM"
    }
  ]

  return (
    <div>

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Upcoming Sessions
        </h1>

        <p className="text-gray-500 mt-2">
          Sessions you are hosting or attending.
        </p>

      </div>

      {/* Hosting Sessions */}
      <div className="mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          Hosting
        </h2>

        <div className="space-y-4">

          {hostingSessions.map((session) => (

            <div
              key={session.id}
              className="bg-white border rounded-3xl p-6 shadow-sm"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-xl font-semibold">
                    {session.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {session.date} • {session.time}
                  </p>

                  <p className="text-green-600 mt-2">
                    {session.registrations} Registered
                  </p>

                </div>

                <button className="bg-green-600 text-white px-5 py-2 rounded-xl">
                  Manage
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Registered Sessions */}
      <div>

        <h2 className="text-2xl font-semibold mb-4">
          Registered
        </h2>

        <div className="space-y-4">

          {registeredSessions.map((session) => (

            <div
              key={session.id}
              className="bg-white border rounded-3xl p-6 shadow-sm"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-xl font-semibold">
                    {session.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {session.date} • {session.time}
                  </p>

                </div>

                <button className="border px-5 py-2 rounded-xl hover:bg-gray-100">
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default UpcomingSessions