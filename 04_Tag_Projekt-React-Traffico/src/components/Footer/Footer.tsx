import "./Footer.css";
import ArrowIcon from "../../assets/Union.svg";
import Logo from "../../assets/logo.png";
import FB from "../../assets/facebook.png";
import TW from "../../assets/twitter.png";
import INS from "../../assets/insta.png";
import Truck from "../../assets/Truck.png"

const Footer = () => {
    return (
        <footer>
            <img className="truck" src={Truck} alt="Truck" />
            <div className="blue-bg">
                <section className="footer-one">
                    <div className="farb-box2">
                        <p>
                            We provide traffic management consultants so you get
                            started quickly, contact us for a quote today!
                        </p>
                    </div>
                        <button>
                            Get started <img src={ArrowIcon} alt="ArrowIcon" />
                        </button>
                </section>
                <section className="links">
                    <img src={Logo} alt="Logo" />
                    <div>
                        <a href="#">About</a>
                        <a href="#">How to</a>
                        <a href="#">FAQS</a>
                    </div>
                </section>
            </div>

            <section  className="footer-two">
                <p>Copyright Mona Eismann @ SuperCode Bootcamp 2025</p>
                <div className="socials">
                    <a href="#">
                        <img src={FB} alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src={TW} alt="Twitter" />
                    </a>
                    <a href="#">
                        <img src={INS} alt="Instagram" />
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
