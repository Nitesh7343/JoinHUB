import React, { useState } from 'react'

const Signup = () => {

  const [otpSent, setOtpSent] = useState(false)

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="w-[550px] bg-white p-8 rounded-3xl shadow-md border border-gray-200">

        {/* HEADING */}
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-500 mt-3">
            Getting started with JoinHUB
          </p>

        </div>

        {/* FORM */}
        <form className="mt-8 flex flex-col gap-5">

          {/* USERNAME */}
          <div>

            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

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
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

          {/* CONFIRM PASSWORD */}
          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>

          {/* SEND OTP BUTTON */}
          {
            !otpSent && (
              <button
                type="button"
                onClick={() => setOtpSent(true)}
                className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
              >
                Send OTP
              </button>
            )
          }

          {/* OTP SECTION */}
          {
            otpSent && (
              <div className="flex flex-col gap-4">

                <div>

                  <label className="block mb-2 font-medium">
                    Enter OTP
                  </label>

                  <input
                    type="text"
                    placeholder="Enter verification code"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                  />

                </div>

                <button
                  type="button"
                  className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  Verify OTP
                </button>

              </div>
            )
          }

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

        {/* LOGIN LINK */}
        <p className="text-center mt-6 text-gray-600">

          Already have an account?

          <span className="text-green-600 cursor-pointer hover:underline ml-1">
            Login
          </span>

        </p>

      </div>

    </div>

  )
}

export default Signup