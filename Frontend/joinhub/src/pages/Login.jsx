import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="w-[550px] bg-white p-8 rounded-3xl shadow-md border border-gray-200">

        {/* HEADING */}
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue to JoinHUB
          </p>

        </div>

        {/* FORM */}
        <form className="mt-8 flex flex-col gap-5">

          {/* EMAIL */}
          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">

            <button
              type="button"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            Login
          </button>

        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <p className="text-gray-500 text-sm">
            OR
          </p>

          <div className="flex-1 h-[1px] bg-gray-300"></div>

        </div>

        {/* GOOGLE BUTTON */}
        <button className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">

          Continue with Google

        </button>

        {/* SIGNUP LINK */}
        <p className="text-center mt-6 text-gray-600">

          Don’t have an account?

          <Link to = "/signup">
          <span className="text-green-600 cursor-pointer hover:underline ml-1">
            Signup
          </span>
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Login