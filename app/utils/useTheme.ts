import { useEffect, useState } from "react";

export default function useTheme() {
  const theme = useState<"dark" | "light">();

  useEffect(() => {
    if (!window.matchMedia) return;

    const query = window.matchMedia("(prefers-color-scheme: dark)");
    theme[1](query.matches ? "dark" : "light");

    const handleChange = () => {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      theme[1](query.matches ? "dark" : "light");
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    return query.removeEventListener("change", handleChange);
  }, []);

  return theme[0];
}
