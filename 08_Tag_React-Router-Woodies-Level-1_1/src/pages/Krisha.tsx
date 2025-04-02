import Icon from "../assets/img/Icon.png";
import BowlsImg from "../assets/img/Bowls_Products.png"


const Krisha = () => {
  return (
    <section className="single-product">
            <article className="intro">
                <div className="icon-left">
                    <img src={Icon} alt="Icon" />
                    <h2>Krisha</h2>
                </div>
                <div className="line"></div>
                <h3>Products</h3>
            </article>

            <article className="single-product-content">
                <div className="card card-3">
                  <img src={BowlsImg} alt="" />
                </div>
                <h5>
                    Krisha showcases what designer Tim Fenby does best: clean lines, subtle curves, and a sleek oak finish that perfectly aligns with current trends. The black and white rings add a refined touch to this handcrafted wooden bowl—like something straight out of a modern Scandinavian design catalog. Simple, stylish, timeless.
                </h5>
            </article>
        </section>
  )
}

export default Krisha
