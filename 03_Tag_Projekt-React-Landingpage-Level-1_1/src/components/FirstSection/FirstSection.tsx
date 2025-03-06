import "./FirstSection.css";

import BrushImg from "../../assets/brush.svg";
import SpeakerImg from "../../assets/megaphone.svg";
import ObjectImg from "../../assets/object-select.svg";
import GlobeImg from "../../assets/globe-line.svg";

const FirstSection = () => {
    return (
        <section className="we-do">
            <h4>What We Do</h4>
            <h3>
                We've got everything you need to launch <br />
                and grow your business
            </h3>
            <div className="we-do-two">
                <div className="content-box">
                    <img src={BrushImg} alt="BrushIcon" />
                    <div>
                        <h5>Brand Identity</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quas, quibusdam magni ducimus veniam, ipsa eum
                            culpa quod explicabo qui expedita atque! Consectetur
                            labore, laudantium repudiandae asperiores neque
                            architecto rem error?
                        </p>
                    </div>
                </div>
                <div className="content-box">
                    <img src={ObjectImg} alt="ObjectIcon" />
                    <div>
                       <h5>Illustration</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas, quibusdam magni ducimus veniam, ipsa eum
                        culpa quod explicabo qui expedita atque! Consectetur
                        labore, laudantium repudiandae asperiores neque
                        architecto rem error?
                    </p> 
                    </div>
                    
                </div>
            </div>
            <div className="we-do-three">
                <div  className="content-box" >
                    <img src={SpeakerImg} alt="MegaphoneIcon" />
                    <div>
                       <h5>Marketing</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas, quibusdam magni ducimus veniam, ipsa eum
                        culpa quod explicabo qui expedita atque! Consectetur
                        labore, laudantium repudiandae asperiores neque
                        architecto rem error?
                    </p> 
                    </div>
                    
                </div>
                <div className="content-box">
                    <img src={GlobeImg} alt="GlobeIcon" />
                    <div>
                       <h5>Web Design</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas, quibusdam magni ducimus veniam, ipsa eum
                        culpa quod explicabo qui expedita atque! Consectetur
                        labore, laudantium repudiandae asperiores neque
                        architecto rem error?
                    </p> 
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
