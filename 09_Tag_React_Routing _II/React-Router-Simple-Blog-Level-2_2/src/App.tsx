import { createBrowserRouter, Outlet, RouterProvider, } from "react-router";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Details from "./pages/Details";


const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/blog", Component: Blog },
      { path: "/blog/:id", Component: Details },
    ],
  },
]);


function Layout(){
  return <main>
    <Navi/>
    <Outlet/>
  </main>
}




function App() {

  return <RouterProvider router={router} />
}

export default App
