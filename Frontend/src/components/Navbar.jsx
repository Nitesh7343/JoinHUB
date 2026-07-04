import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoH.png";
import Searchbar from "./Searchbar.jsx"
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, loading } = useAuth();

const isLoggedIn = !!user;

  return (
    <nav className="flex items-center justify-between px-8 py-1 shadow-md m-3 mt-5 rounded-4xl p-3">
      {/* LEFT SECTION */}
      <div className="h-14 flex items-center overflow-hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="w-42 object-contain" />
        </Link>
      </div>

      {/* CENTER SECTION */}
      <Searchbar/>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">
        <Link to="/dashboard/">Dashboard</Link>

        <div className="relative group">
          {/* BUTTON */}
          <button className="flex items-center gap-1 hover:text-green-600 transition duration-200 cursor-pointer py-2">
            Sessions
            <span className="text-sm">▼</span>
          </button>

          {/* DROPDOWN */}
          <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
            <div className="w-56 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <Link
                to="/sessions"
                className="block px-5 py-3 hover:bg-gray-100 transition"
              >
                Explore Sessions
              </Link>

              <Link
                to="/create-session"
                className="block px-5 py-3 hover:bg-gray-100 transition"
              >
                Organize Session
              </Link>
            </div>
          </div>
        </div>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
