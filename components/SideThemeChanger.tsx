import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

const SideThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (


    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" transition-colors text-md font-semibold lg:text-md flex flex-row   w-20 ease-in-out"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (


        <><BsFillSunFill className="h-6 w-6 mr-3" /><>Light</></>

      ) : (
      <>  <FaMoon className="h-6 w-6 mr-3" />Dark</>
      )}

    </button>


  );
};

export default SideThemeChanger;
