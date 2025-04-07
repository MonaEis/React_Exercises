import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'

const router = createBrowserRouter([
  {
  Component: RootLayout,
  children: [
    {path: "/", Component: HomePage},
    {path: "/quiz/:slug", Component: QuizPage}
    
  ]
},
])




function App() {

  return <RouterProvider router={router} />
}

export default App
