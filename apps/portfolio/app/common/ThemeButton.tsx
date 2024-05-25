import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'hooks'

const ThemeButton = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <button className="link absolute right-2 top-2" onClick={toggleTheme}>
      {theme === 'light' ?
        <MoonIcon className="size-8 lg:size-12" />
      : <SunIcon className="size-8 lg:size-12" />}
    </button>
  )
}

export default ThemeButton
