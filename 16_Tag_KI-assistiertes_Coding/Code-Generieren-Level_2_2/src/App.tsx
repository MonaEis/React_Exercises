import { validatePassword } from './utils/passwort_windsurf'
import './App.css'
import { validatePasswordCoPi } from './utils/Passwort_copilot'

function App() {
  console.log("Test windsurf: ", validatePassword("kA-23pkcka"))
  console.log("Test copilot: ", validatePasswordCoPi("kA!23pkcka"))

  return (
    <>
    welcome
    </>
  )
}

export default App
