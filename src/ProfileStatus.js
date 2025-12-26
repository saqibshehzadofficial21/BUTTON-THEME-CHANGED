import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ProfileStatus({ status }) {
  // Get theme from context
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ color: theme === "light" ? "black" : "white" }}>
      Status: {status}
    </p>
  );
}

export default ProfileStatus;