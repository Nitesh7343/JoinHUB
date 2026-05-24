import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoH.png'

const Navbar = () => {

  const isLoggedIn = false

  return (
    <nav className="flex items-center justify-between px-8 py-1 shadow-md m-3 mt-5 rounded-4xl p-3">

      {/* LEFT SECTION */}
      <div className="h-14 flex items-center overflow-hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="w-42 object-contain"/>
        </Link>
      </div>

      {/* CENTER SECTION */}
      <div className="w-[40%] mb-3">

    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm bg-white transition duration-300 hover:bg-gray-100  focus-within:ring-1 focus-within:ring-green-600">
    {/* INPUT */}
    <input
      type="text"
      placeholder="Search for sessions..."
      className="w-full px-5 py-2 outline-none bg-transparent"
    />

    {/* BUTTON */}
    <button className="text-green-600 px-5 py-2 hover:bg-green-600 hover:text-white transition">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.8 5.8a7.5 7.5 0 0010.6 10.6z"
        />
      </svg>

    </button>

  </div>

</div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">

        <Link to="/sessions">
          Sessions
        </Link>

        <Link to="/dashboard/create-session">
          
        </Link>

        {
          isLoggedIn ? (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Signup
              </Link>
            </>
          )
        }

      </div>

    </nav>
  )
}

export default Navbar