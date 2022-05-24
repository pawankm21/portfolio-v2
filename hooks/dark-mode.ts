import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      const root = window.document.documentElement;
      root.classList.add("dark");
    } else {
      const root = window.document.documentElement;
      root.classList.remove("dark");
    }
  }, [dark]);
  function toggleDarkMode(e: any) {
    e.preventDefault();
    setDark(!dark);
  }
  return { dark, toggleDarkMode };
}
