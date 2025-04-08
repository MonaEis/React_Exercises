import { SwitchThemeProvider } from "./contexts/themeContext"
import HomePage from "./pages/HomePage"

function App() {
  
  
  return (
    <SwitchThemeProvider>
      <HomePage/>
    </SwitchThemeProvider>
  )
}

export default App
