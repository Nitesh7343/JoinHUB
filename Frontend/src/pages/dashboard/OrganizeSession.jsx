import React, { useState } from "react";

const OrganizeSession = () => {
  const [isPaid, setIsPaid] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">Create Your Session</h1>

        <p className="text-gray-500 text-lg mt-3">
          Share your knowledge with learners around the world.
        </p>
      </div>

      <form className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Basic Information</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Session Title"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <select className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option>Select Category</option>
              <option>Web Development</option>
              <option>AI</option>
              <option>Dance</option>
              <option>Singing</option>
            </select>

            <textarea
              rows="5"
              placeholder="Describe your session..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Schedule</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <input
              type="time"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <input
              type="time"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Session Settings */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">⚙ Session Settings</h2>

          {/* Language */}
          <div className="mb-8">
            <label className="block mb-3 font-medium text-gray-700">
              Language
            </label>

            <select
              className="
      w-full
      border
      border-gray-300
      rounded-2xl
      px-4
      py-3
      outline-none
      focus:ring-2
      focus:ring-green-500
      "
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Hindi + English</option>
            </select>
          </div>

          {/* Session Type */}
          <div>
            <label className="block mb-4 font-medium text-gray-700">
              Session Type
            </label>

            <div className="grid md:grid-cols-2 gap-5">
              {/* FREE */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setIsPaid(false)}
                  className={`
      cursor-pointer
      rounded-2xl
      border-2
      px-4
      py-3
      transition
      ${
        !isPaid
          ? "border-green-500 bg-green-50"
          : "border-gray-200 hover:border-green-300"
      }
    `}
                >
                  <h3 className="font-semibold text-base">Free</h3>

                  <p className="text-gray-500 text-sm mt-1">Anyone can join</p>
                </div>

                <div
                  onClick={() => setIsPaid(true)}
                  className={`
      cursor-pointer
      rounded-2xl
      border-2
      px-4
      py-3
      transition
      ${
        isPaid
          ? "border-green-500 bg-green-50"
          : "border-gray-200 hover:border-green-300"
      }
    `}
                >
                  <h3 className="font-semibold text-base">Paid</h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Charge participants
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price */}
          {isPaid && (
            <div className="mt-8">
              <label className="block mb-3 font-medium text-gray-700">
                Session Price
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>

                <input
                  type="number"
                  placeholder="499"
                  className="
            w-full
            border
            border-gray-300
            rounded-2xl
            pl-10
            pr-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-green-500
            "
                />
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-l font-semibold mb-5"> Thumbnail</h2>

          <label className="border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-green-500 transition">
            <div className="text-4xl">📷</div>

            <h3 className="font-semibold mt-4 text-l">Upload Thumbnail</h3>

            <p className="text-gray-500 text-sm mt-1">PNG, JPG or JPEG</p>

            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Learning Outcomes</h2>

          <textarea
            rows="4"
            placeholder="What participants will learn..."
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">Prerequisites</h2>

          <textarea
            rows="3"
            placeholder="Any prerequisites..."
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className=" w-full  bg-green-600  text-white py-4 rounded-2xl text-lg font-semibold  hover:bg-green-700 transition shadow-lg"
        >
          🚀 Create Session
        </button>
      </form>
    </div>
  );
};

export default OrganizeSession;
