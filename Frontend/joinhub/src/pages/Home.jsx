import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (

    <div className="px-10 mt-16">

      {/* HERO SECTION */}
      <div className="flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="w-[50%]">

          <h1 className="text-6xl font-bold leading-tight">
            Learn Live.
            <br />
            Teach Live.
            <br />
            Grow Together.
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Join live workshops, online classes and interactive sessions
            from creators around the world.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-8">

            <Link to = "/exploreSession">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              Explore Sessions
            </button>
            </Link>

            <Link to = "/createSession">
            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              Organize Session
            </button>
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-[45%] flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="hero"
            className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
          />

        </div>

      </div>

    </div>

  )
}

export default Home