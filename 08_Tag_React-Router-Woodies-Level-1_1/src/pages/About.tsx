import Icon from "../assets/img/Icon.png";
import AboutImg from "../assets/img/About_Bild.png"

const About = () => {
    return (
        <section className="about">
            <article className="intro">
                <div className="icon-left">
                    <img src={Icon} alt="Icon" />
                    <h2>Who we are</h2>
                </div>
                <div className="line"></div>
                <h3>About us</h3>
            </article>

            <article className="about-content">
                <div className="yellow-container">
                    <div className="background-shape"></div>
                    <img src={AboutImg} alt="Wooden Bowls" />
                </div>
                <div>
                    <h2>
                        WOODIES <span>is the</span> home of modern wooden furniture
                    </h2>
                    <h3>the answer to your need for furniture with shapes, sizes and colors.</h3>
                </div>
            </article>
        </section>
    );
};

export default About;
