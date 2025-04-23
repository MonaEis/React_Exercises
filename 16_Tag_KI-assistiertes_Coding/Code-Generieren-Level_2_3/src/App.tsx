import { getUserActivityPattern } from './util/getUserActivityPatternCopilot'
import { getUserActivityPatternWindsurf } from './util/getUserActivityPatternWindsurf'
import './App.css'

function App() {
  console.log("Test copilot: ",getUserActivityPattern("user1", [
    { userId: "user1", timestamp: "2023-10-01T08:00:00Z", location: "New York" }]))

    console.log("Test windsurf: ", getUserActivityPatternWindsurf("user1", [
      { userId: "user1", timestamp: "2023-10-01T08:00:00Z", location: "New York" }
    ]))

  return (
    <>
     Welcome
    </>
  )
}

export default App
