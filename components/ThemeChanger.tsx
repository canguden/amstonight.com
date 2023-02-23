import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" transition-colors text-md lg:text-xl text-white flex ease-in-out"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BsFillSunFill className="h-5 w-5 text-gray-300 mt-1" />
      ) : (
        <FaMoon className="h-5 w-5 text-black mt-1" /> 
      )}
    </button>
  );
};

export default ThemeChanger;
