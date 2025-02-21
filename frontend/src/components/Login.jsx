import React, { useState } from 'react'
import { auth } from './Firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or handle successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect or handle successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* App Logo/Name */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">MEMORIES</h2>
        </div>

        {/* Login Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Login to your Account
          </h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">
                Sign In
              </button>
            </div>
          </form>

          {/* Social Login Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer" onClick={handleGoogleSignIn}>
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

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <h3 className="inline text-gray-600">Don't have an account? </h3>
            <a href="/signup" className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-500">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
