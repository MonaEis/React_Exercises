import "./Head.css"

const Head = () => {
    return (
        <header>
            <div className="head-one">
                <h2>Hello There</h2>
                <h1>We Are Glint</h1>
                <div className="line-hor"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, illo? Saepe impedit commodi magni, dolore aperiam
                    amet pariatur consequatur soluta, sapiente dolor unde eius
                    velit blanditiis architecto. Perferendis ipsum ea quas
                    consectetur officia modi, iure eius voluptatem magnam
                    impedit fugit suscipit. Illum natus libero maxime. Itaque
                    cumque perspiciatis quos deserunt?
                </p>
            </div>
            <div className="head-two">
                <div>
                    <h3>127</h3>
                    <p>Award Received</p>
                </div>
                <div className="line-ver"></div>
                <div>
                    <h3>1505</h3>
                    <p>Cups of Coffee</p>
                </div>
                <div className="line-ver"></div>
                <div>
                    <h3>109</h3>
                    <p>Projects Completed</p>
                </div>
                <div className="line-ver"></div>
                <div>
                    <h3>102</h3>
                    <p>Happy Clients</p>
                </div>
            </div>
        </header>
    );
};

export default Head;
