import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";


const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/:id", Component: CarDetail },
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
  return <RouterProvider router={router} />;
}

export default App
