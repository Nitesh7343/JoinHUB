import React from 'react'

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="bg-white border rounded-3xl shadow-sm p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-green-500"
          />

          {/* User Info */}
          <div>

            <h1 className="text-4xl font-bold">
              Developer
            </h1>

            <p className="text-gray-500 mt-2">
              Frontend Developer | MERN Learner
            </p>

            <p className="text-gray-600 mt-4">
              Passionate about web development, teaching and
              building impactful products.
            </p>

            <button className="mt-5 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
              Edit Profile
            </button>

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mt-8">

        <div className="bg-white border rounded-3xl p-6 text-center">
          <h3 className="text-gray-500">Hosted</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white border rounded-3xl p-6 text-center">
          <h3 className="text-gray-500">Joined</h3>
          <p className="text-3xl font-bold mt-2">25</p>
        </div>

        <div className="bg-white border rounded-3xl p-6 text-center">
          <h3 className="text-gray-500">Views</h3>
          <p className="text-3xl font-bold mt-2">1.2K</p>
        </div>

        <div className="bg-white border rounded-3xl p-6 text-center">
          <h3 className="text-gray-500">Followers</h3>
          <p className="text-3xl font-bold mt-2">89</p>
        </div>

      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Personal Info */}
        <div className="bg-white border rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Personal Information
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-gray-500">Email</p>
              <p>nitesh@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-500">Language</p>
              <p>English, Hindi</p>
            </div>

          </div>

        </div>

        {/* Skills */}
        <div className="bg-white border rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Java
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Spring Boot
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              MongoDB
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile