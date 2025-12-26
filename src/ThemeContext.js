import { createContext, useState, useEffect } from "react";

// Create context
export const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem("theme");
      return saved ? saved : "light"; // Default to 'light' theme if none is found
    } catch (e) {
      return "light"; // Fallback to 'light' theme in case of an error
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Store the theme in localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // Ignore any write errors (e.g., in incognito mode)
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
