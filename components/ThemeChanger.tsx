import { useTheme } from 'next-themes'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" text-md flex text-white transition-colors ease-in-out lg:text-xl"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <BsFillSunFill className="mt-1 h-5 w-5 text-gray-300" />
      ) : (
        <FaMoon className="mt-1 h-5 w-5 text-black" />
      )}
    </button>
  )
}

export default ThemeChanger
