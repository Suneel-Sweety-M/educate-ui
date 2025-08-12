import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// Configure axios instance with base URL
const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // Ensure cookies are sent with requests
});

// Axios interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Check if error is due to expired access token and prevent infinite retry loop
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "Access token expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Mark request as retried
      try {
        // Call refresh token endpoint
        await api.post("/auth/refresh-token");
        // No need to update access token in localStorage since it's in HTTP-only cookie
        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (e.g., expired or invalid)
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("user");
        window.location.href = "/login"; // Redirect to login
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/auth/login", formData);
      toast.success(response.data.message);
      // Access token is set in HTTP-only cookie by server, no refresh token sent
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #0000ff, #000000)",
        backgroundSize: "cover",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <img
            src="/digital.png"
            alt="Digital Launchpad Logo"
            style={{ height: "60px" }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: "28px" }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="axxxxx@gmail.com"
              style={{
                padding: "8px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "9999px",
                textAlign: "center",
                border: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          <div style={{ marginTop: "12px" }}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{
                padding: "8px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "9999px",
                textAlign: "center",
                border: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              padding: "8px",
              borderRadius: "9999px",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              opacity: isLoading ? "0.6" : "1",
              width: "100%",
              boxSizing: "border-box",
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                style={{
                  animation: "spin 1s linear infinite",
                  height: "20px",
                  width: "20px",
                  marginRight: "8px",
                  color: "#000",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  style={{ opacity: "0.25" }}
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  style={{ opacity: "0.75" }}
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              "Sign In"
            )}
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <Link
              to="/forgot-password"
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                cursor: "pointer",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Forgot password?
            </Link>
            <Link
              to="/register"
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                cursor: "pointer",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;