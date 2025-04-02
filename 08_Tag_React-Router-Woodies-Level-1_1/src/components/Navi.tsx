import { Link } from "react-router-dom"
import Logo from "../assets/img/Logo.png"


const Navi = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/products">Products</Link>
        </div>
      
    </nav>
  )
}

export default Navi
