import React from 'react'

const Start = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="relative rounded-3xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 hover:animate-gradient-x text-white max-w-full w-[95%] sm:w-[80%] lg:w-[60%] h-64 p-6 mx-auto shadow-2xl transition-all duration-300 ease-in-out flex justify-center items-center transform hover:scale-105 overflow-hidden">
        {/* Add a pseudo-element for a border effect */}
        <div className="absolute inset-0 rounded-3xl border-4 border-white opacity-30"></div>
        <div className="text-center space-y-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Experience the Power of Affordable Permanent Storage
          </h2>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-2xl w-36 hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Start;
