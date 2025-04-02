import Icon from "../assets/img/Icon.png";
import ChairImg from "../assets/img/chair_Products.png"


const Deon = () => {
    return (
        <section className="single-product">
            <article className="intro">
                <div className="icon-left">
                    <img src={Icon} alt="Icon" />
                    <h2>Deon</h2>
                </div>
                <div className="line"></div>
                <h3>Products</h3>
            </article>

            <article className="single-product-content">
                <div className="card card-2">
                  <img src={ChairImg} alt="" />
                </div>

                <h5>
                    Deon embodies designer Tim Fenby’s signature style: clean lines, gentle curves, and a perfect balance of form and function. The rich wooden legs contrast beautifully with the deep blue shell seat, creating a striking yet timeless look. A touch of Nordic elegance with a modern twist—effortless, stylish, and undeniably inviting.
                </h5>
            </article>
        </section>
    );
};

export default Deon;
