import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* App Logo/Name */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">MEMORIES</h2>
        </div>

        {/* Signup Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Create your Account
          </h1>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">
              Sign Up
            </button>
          </div>

          {/* Social Signup Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                <img src="" alt="Google" className="h-5 w-5" />
              </div>
              <div className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                <img src="" alt="Facebook" className="h-5 w-5" />
              </div>
              <div className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                <img src="" alt="Twitter" className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <h3 className="inline text-gray-600">Already have an account? </h3>
            <a href="/login" className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-500">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
