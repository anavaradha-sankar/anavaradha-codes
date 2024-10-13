import { useEffect, useState } from "react";
import { Home } from "./pages/home";
import "./styles.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.remove("theme-dark");
    } else {
      body.classList.add("theme-dark");
    }
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("theme-dark");
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <div className="App">
      <div className="relative">
        <div
          className={`fixed right-8 top-8 z-50 h-8 w-8 cursor-pointer rounded-full transition-all duration-500 ${
            isDarkTheme ? "bg-mainThemeGradient" : "bg-darkThemeGradient"
          } shadow-custom border-1 border-white`}
          onClick={toggleTheme}
        ></div>
        <Home />
      </div>
    </div>
  );
}

export default App;
