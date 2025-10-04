// src/pages/Auth.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../feature/auth/authSlice";
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const dispatch = useDispatch();
  const { isLoading, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login({ email: formData.email, password: formData.password }));
      navigate("/profile")
    } else {
      dispatch(register(formData));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-purple-400">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <span className="text-5xl">🏆</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h2>
        <p className="text-gray-600 mb-6">
          {isLogin ? "Log in to play today!" : "Sign up to start your journey!"}
        </p>

        {/* Error Message */}
        {isError && <p className="text-red-500 mb-2">{message}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Links */}
        {isLogin && (
          <div className="mt-3 text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        )}

        <div className="mt-4 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:underline"
              >
                Log In
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-gray-500 font-semibold">Lumin</div>
      </div>
    </div>
  );
}
