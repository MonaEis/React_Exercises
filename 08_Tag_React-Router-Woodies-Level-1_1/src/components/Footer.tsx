import Logo from "../assets/img/Logo.png";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="line"></div>
                <img src={Logo} alt="Logo" />
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
            </section>
            <p className="copyright">© 2025 MonaEismann @Supercode</p>
        </footer>
    );
};

export default Footer;
