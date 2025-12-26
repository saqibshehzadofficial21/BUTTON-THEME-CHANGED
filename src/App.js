import React from "react";
import Profile from "./Profile"; // Import the Profile component
import { ThemeProvider } from "./ThemeContext"; // Import the ThemeProvider to wrap the app

function App() {
  return (
    <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
      <div>
        <Profile /> {/* Profile component renders here */}
      </div>
    </ThemeProvider>
  );
}

export default App;