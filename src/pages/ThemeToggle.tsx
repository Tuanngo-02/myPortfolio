import { useEffect, useState } from "react";
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <div className="flex items-center justify-center">
      <div 
        onClick={toggleTheme}
        className="relative w-15 h-7 bg-gray-900 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
      >
        {/* Background track */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className={`absolute inset-0 transition-opacity duration-500 ${dark ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900"></div>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${!dark ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full bg-gradient-to-r from-white to-white"></div>
          </div>
        </div>

        {/* Sun icon - left side */}
        <div className={`absolute left-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
          !dark ? 'text-yellow-500 scale-110' : 'text-gray-600 scale-90'
        }`}>
          <BsSun size={16} />
        </div>

        {/* Moon icon - right side */}
        <div className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
          dark ? 'text-white scale-110' : 'text-gray-200 scale-90'
        }`}>
          <BsMoon size={16} />
        </div>
      </div>
    </div>
    
  );
}
