import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const DashboardHome = () => {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          You have 2 upcoming sessions this week.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="text-gray-500">Hosted Sessions</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="text-gray-500">Joined Sessions</h3>
          <p className="text-3xl font-bold mt-2">25</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="text-gray-500">Upcoming</h3>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h3 className="text-gray-500">Total Views</h3>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>

      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white p-6 rounded-3xl border shadow-sm">

        <h2 className="text-2xl font-semibold mb-4">
          Upcoming Sessions
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <h3 className="font-semibold">
                React Masterclass
              </h3>
              <p className="text-sm text-gray-500">
                15 June • 7:00 PM
              </p>
            </div>

            <button className="text-green-600 font-medium">
              View
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">
                AI Workshop
              </h3>
              <p className="text-sm text-gray-500">
                18 June • 8:00 PM
              </p>
            </div>

            <button className="text-green-600 font-medium">
              View
            </button>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">

        <Link
          to="/dashboard/create-session"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Organize Session
        </Link>

        <Link
          to="/sessions"
          className="border px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Explore Sessions
        </Link>

      </div>

    </div>
  )
}

export default DashboardHome