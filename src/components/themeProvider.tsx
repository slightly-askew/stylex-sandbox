"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { Button } from "./button";

export const ThemeContext = createContext<{
  theme: "Light" | "Dark";
  toggleTheme: () => void;
}>({
  theme: "Light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const toggleTheme = useCallback(() => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <Button onClick={toggleTheme}>{theme + " theme"}</Button>;
}
