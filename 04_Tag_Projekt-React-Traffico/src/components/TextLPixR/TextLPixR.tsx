import "./TextLPixR.css";
import DudeImg from "../../assets/Illustration_dude.png";

const TextLPixR = () => {
  return (
    <section className="textl-pright">
     <div>
        <h3>About us</h3>
        <p className="running-text">The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>
        <div className="farb-box">
            <p>How do you do when you need to obtain 
            a commercial traffic permit for freight transport to your business?</p>
        </div>
     </div>
     <img src={DudeImg} alt="Dude" />
    </section>
  )
}

export default TextLPixR
