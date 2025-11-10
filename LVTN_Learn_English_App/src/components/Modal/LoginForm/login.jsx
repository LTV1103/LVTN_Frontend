import React, { useState } from "react";
import "./modal.css"; // tạo file CSS riêng

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "login" && (
        <div className="tab-content">
          <p className="center">Sign in with:</p>
          <div className="socials">
            <button className="social facebook">F</button>
            <button className="social twitter">T</button>
            <button className="social google">G</button>
            <button className="social github">GH</button>
          </div>

          <p className="center">or</p>

          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#!">Forgot password?</a>
          </div>

          <button className="submit-btn">Sign In</button>
          <p className="center">
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      )}

      {activeTab === "register" && (
        <div className="tab-content">
          <p className="center">Sign up with:</p>
          <div className="socials">
            <button className="social facebook">F</button>
            <button className="social twitter">T</button>
            <button className="social google">G</button>
            <button className="social github">GH</button>
          </div>

          <p className="center">or</p>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <label className="center">
            <input type="checkbox" /> I have read and agree to the terms
          </label>

          <button className="submit-btn">Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Login;
