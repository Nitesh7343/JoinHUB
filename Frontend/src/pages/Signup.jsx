import React, { useState } from 'react'
import { googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,sendEmailVerification,signOut} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const Signup = () => {

const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSignup = async (e) => {
  e.preventDefault();

  setError("");

  const { username, email, password, confirmPassword } = formData;

  // Basic validation
  if (!username || !email || !password || !confirmPassword) {
    return setError("Please fill all the fields.");
  }

  if (password !== confirmPassword) {
    return setError("Passwords do not match.");
  }

  if (password.length < 6) {
    return setError("Password must be at least 6 characters.");
  }

  try {
    setLoading(true);

    // Create Firebase user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Send verification email
    await sendEmailVerification(userCredential.user);
    // Get Firebase ID Token
const idToken = await userCredential.user.getIdToken();

// Sync user with backend
await axios.post(
  "http://localhost:8000/api/auth/sync-user",
  {
    username,
  },
  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  }
);

// Sign out after signup
await signOut(auth);

alert(
  "Account created successfully!\n\nPlease verify your email before logging in."
);

// Redirect to Login page
navigate("/login");


  } catch (error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      setError("This email is already registered.");
      break;

    case "auth/invalid-email":
      setError("Please enter a valid email.");
      break;

    case "auth/weak-password":
      setError("Password should be at least 6 characters.");
      break;

    default:
      setError(error.message);
  }
} finally {
    setLoading(false);
  }
};

const handleGoogleSignup = async () => {
  try {
    setLoading(true);
    setError("");

    // Open Google Popup
    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    const user = result.user;

    // Get Firebase Token
    const idToken = await user.getIdToken();

    // Sync MongoDB
    await axios.post(
      "http://localhost:8000/api/auth/sync-user",
      {
        username: user.displayName,
      },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    localStorage.setItem("token", idToken);

    navigate("/dashboard", { replace: true });

  } catch (error) {

    if (error.code !== "auth/popup-closed-by-user") {
      setError(error.message);
    }

  } finally {
    setLoading(false);
  }
};

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
        <form onSubmit={handleSignup} className="mt-8 flex flex-col gap-5">

          {/* USERNAME */}
          <div>

            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
  type="text"
  name="username"
  value={formData.username}
  onChange={handleChange}
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
  name="email"
  value={formData.email}
  onChange={handleChange}
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
  name="password"
  value={formData.password}
  onChange={handleChange}
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
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm your password"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

         </div>

         {error && (
  <p className="text-red-500 text-sm">
    {error}
  </p>
)}

<button
  type="submit"
  disabled={loading}
  className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition disabled:bg-gray-400"
>
  {loading ? "Creating Account..." : "Create Account"}
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
        <button
  type="button"
  onClick={handleGoogleSignup}
  className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
>
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