import React from 'react'

const PastSessions = () => {

  const pastSessions = [
    {
      id: 1,
      title: "React Masterclass",
      date: "10 June 2026",
      views: 120,
      recording: true
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "8 June 2026",
      views: 85,
      recording: true
    }
  ]

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Past Sessions
        </h1>

        <p className="text-gray-500 mt-2">
          Sessions you've attended or hosted.
        </p>

      </div>

      <div className="space-y-5">

        {pastSessions.map((session) => (

          <div
            key={session.id}
            className="bg-white border rounded-3xl p-6 shadow-sm"
          >

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-xl font-semibold">
                  {session.title}
                </h2>

                <p className="text-gray-500 mt-1">
                  {session.date}
                </p>

                <div className="flex gap-4 mt-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Completed
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {session.views} Views
                  </span>

                </div>

              </div>

              <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
                Watch Recording
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default PastSessions