import React from 'react'

const Searchbar = () => {
  return (
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
  )
}

export default Searchbar
