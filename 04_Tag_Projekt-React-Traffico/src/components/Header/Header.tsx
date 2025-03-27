import "./Header.css"

import Logo from "../../assets/logo.png";
import ArrowIcon from "../../assets/Union.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
        <div>
            <a href="#">About</a>
            <a href="#">How to</a>
            <a href="#">FAQS</a>
            <button>Contact us</button>
        </div>
      </nav>
      <section>
        <h1>Your awesome traffic permit consultant.</h1>
        <button>Get started  <img src={ArrowIcon} alt="ArrowIcon" /></button>
      </section>
    </header>
  )
}

export default Header
