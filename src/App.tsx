import { createContext, useState } from 'react'
import Hero from './components/Hero'
import ReactSwitch from 'react-switch'
import './index.css'
import Parralax from './components/Parralax'
import Portfolio from './components/Portfolio'
export const ThemeContext = createContext<string | null>(null)

function App() {
  const [theme, setTheme] = useState<string>('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  console.log('theme', theme)
  // Set the theme class on the body element
  document.body.className = theme
  return (
    <ThemeContext.Provider value={theme}>
      <div className="main-container block h-full w-full relative">
        <div className="absolute right-[14rem] m-2 z-1">
          <ReactSwitch
            title="Dark mode"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </div>

        <Hero />
        <Portfolio />

        <Parralax />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
