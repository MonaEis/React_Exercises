import { useContext } from "react"
import { switchThemeContext } from "../contexts/themeContext"



const SwitchThemeComponent = () => {
  const {theme, chooseTheme} = useContext(switchThemeContext)

  return (
    <div>
      <button onClick={chooseTheme} className={theme}>Switch Theme (Current: {theme})</button>
    </div>
  )
}

export default SwitchThemeComponent
