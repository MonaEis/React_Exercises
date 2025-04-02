import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import Krisha from "./pages/Krisha";
import Jenson from "./pages/Jenson";
import Deon from "./pages/Deon";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/krisha",
        Component: Krisha,
      },
      {
        path: "/products/jenson",
        Component: Jenson,
      },
      {
        path: "/products/deon",
        Component: Deon,
      },


    ]
  }
  
  
]);


function Layout() {
  return <main>
    <Navi/>
    <Outlet/>
    <Footer/>
  </main>
}


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
