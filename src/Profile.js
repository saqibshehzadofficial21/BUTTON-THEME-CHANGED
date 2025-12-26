import React, { useState, useEffect, useContext } from "react";
import ProfileStatus from "./ProfileStatus";
import { ThemeContext } from "./ThemeContext";

function Profile() {
  // Status state
  const [status, setStatus] = useState(localStorage.getItem("status") || "Offline");

  // Attendance state
  const [attendance, setAttendance] = useState(localStorage.getItem("attendance") || "Checked Out");

  // Get theme from context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Toggle status between "Online" and "Offline"
  const toggleStatus = () => {
    setStatus(status === "Online" ? "Offline" : "Online");
  };

  // Toggle attendance status
  const toggleAttendance = () => {
    const newAttendance = attendance === "Checked In" ? "Checked Out" : "Checked In";
    setAttendance(newAttendance);
    localStorage.setItem("attendance", newAttendance);
  };

  // Save status and attendance to localStorage when they change
  useEffect(() => {
    localStorage.setItem("status", status);
  }, [status]);

  useEffect(() => {
    localStorage.setItem("attendance", attendance);
  }, [attendance]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme === "light" ? "#f7f7f7" : "#000", // Light and dark mode background
        color: theme === "light" ? "black" : "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shining stars effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          pointerEvents: "none", // Prevent the stars from interfering with other elements
        }}
      >
        {Array.from({ length: 200 }, (_, i) => (
          <div
            key={i}
            className="star"
            style={{
              position: "absolute",
              backgroundColor: theme === "light" ? "black" : "white", // Star color based on theme
              borderRadius: "50%",
              width: `${Math.random() * 2 + 1}px`, // Small star size
              height: `${Math.random() * 2 + 1}px`, // Small star size
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: "twinkle 2s infinite ease-in-out", // Twinkle animation
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 2 + 2}px rgba(255, 255, 255, 0.8)`, // Shine effect to stars
            }}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", zIndex: 1 }}>
        {/* Profile Text */}
        <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Profile</h2>
        
        {/* Profile Status */}
        <ProfileStatus status={status} />

        {/* Toggle Status Button */}
        <button
          onClick={toggleStatus}
          style={{
            padding: "15px 30px",
            background: status === "Online"
              ? "linear-gradient(45deg, #28a745, #1e7e34)"
              : "linear-gradient(45deg, #dc3545, #c82333)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
          }}
        >
          {status === "Online" ? "✅ Checked In" : "❌ Checked Out"}
        </button>

        {/* Attendance Toggle Button */}
        <button
          onClick={toggleAttendance}
          style={{
            padding: "15px 30px",
            background: attendance === "Checked In"
              ? "linear-gradient(45deg, #28a745, #1e7e34)"
              : "linear-gradient(45deg, #dc3545, #c82333)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            marginLeft: "10px",
            marginTop: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
          }}
        >
          {attendance === "Checked In" ? "✅ Checked In" : "❌ Checked Out"}
        </button>
      </div>

      {/* Theme Toggle Button on top-right corner */}
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          background: theme === "light" ? "linear-gradient(45deg, #343a40, #212529)" : "linear-gradient(45deg, #f8f9fa, #e9ecef)",
          color: theme === "light" ? "white" : "black",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default Profile;
