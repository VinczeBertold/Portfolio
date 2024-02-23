"use client";

import { useEffect, useState } from "react";

interface ThemeSwitcherProps {
  theme: string;
}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  const [theme, setTheme] = useState(props.theme);

  useEffect(() => {
    fetch("/api/theme", {
      method: "POST",
      body: JSON.stringify({ theme }),
    });
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="flex cursor-pointer gap-2">
      <input
        type="checkbox"
        value={theme || "dark"}
        defaultChecked={props.theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
        className="toggle theme-controller"
        name="theme"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}
