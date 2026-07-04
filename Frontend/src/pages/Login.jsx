import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { auth, googleProvider } from "../firebase";
import {signInWithEmailAndPassword,signInWithPopup,signOut,sendPasswordResetEmail} from "firebase/auth";

const Login = () => {

const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [message, setMessage] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleLogin = async (e) => {
  e.preventDefault();

  setError("");

  const { email, password } = formData;

  if (!email || !password) {
    return setError("Please fill all the fields.");
  }

  try {
    setLoading(true);

    // Login with Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
   await user.reload();
    // Check email verification
    if (!user.emailVerified) {
      await signOut(auth);

      return setError(
        "Please verify your email before logging in."
      );
    }

    // Get Firebase Token
    const idToken = await user.getIdToken();

    // Sync MongoDB
    await axios.post(
      "http://localhost:8000/api/auth/sync-user",
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    // Store token
    localStorage.setItem("token", idToken);

localStorage.setItem(
  "user",
  JSON.stringify({
    uid: user.uid,
    email: user.email,
  })
);

    navigate("/dashboard", { replace: true });

  } catch (error) {

    switch (error.code) {

      case "auth/user-not-found":
        setError("User not found.");
        break;

      case "auth/wrong-password":
        setError("Incorrect password.");
        break;

      case "auth/invalid-credential":
        setError("Invalid email or password.");
        break;

      default:
        setError(error.message);
    }

  } finally {
    setLoading(false);
  }
};

const handleForgotPassword = async () => {
  setError("");
  setMessage("");

  if (!formData.email) {
    return setError("Please enter your email first.");
  }

  try {
    await sendPasswordResetEmail(auth, formData.email);

    setMessage(
      "Password reset email sent. Please check your inbox."
    );

  } catch (error) {

    switch (error.code) {

      case "auth/user-not-found":
        setError("No account found with this email.");
        break;

      case "auth/invalid-email":
        setError("Please enter a valid email.");
        break;

      default:
        setError(error.message);

    }
  }
};

const handleGoogleLogin = async () => {
  try {
    setLoading(true);
    setError("");

    // Open Google popup
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;

    // Get Firebase ID Token
    const idToken = await user.getIdToken();

    // Sync user with MongoDB
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

    // Store token
    localStorage.setItem("token", idToken);

    localStorage.setItem(
      "user",
      JSON.stringify({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      })
    );

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
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue to JoinHUB
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-5">

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
  placeholder="Enter your password"
  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {error && (
  <p className="text-red-500 text-sm">
    {error}
  </p>
)}

{message && (
  <p className="text-green-600 text-sm">
    {message}
  </p>
)}

          {/* LOGIN BUTTON */}
          <button
  type="submit"
  disabled={loading}
  className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition disabled:bg-gray-400"
>
  {loading ? "Logging In..." : "Login"}
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
  onClick={handleGoogleLogin}
  disabled={loading}
  className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition disabled:bg-gray-100"
>
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