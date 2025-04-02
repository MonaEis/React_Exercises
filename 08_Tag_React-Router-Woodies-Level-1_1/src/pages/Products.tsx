import Icon from "../assets/img/Icon.png"
import TableImg from "../assets/img/Table_Products.png"
import ChairImg from "../assets/img/chair_Products.png"
import BowlsImg from "../assets/img/Bowls_Products.png"
import { Link } from "react-router-dom"


const Products = () => {
  return (
    <section className="products">
            <article className="intro">
                <div className="icon-left">
                    <img src={Icon} alt="Icon" />
                    <h2>What we have</h2>
                </div>
                <div className="line"></div>
                <h3>Products</h3>
            </article>

            <article className="products-content">
                <div className="card card-1">
                  <p className="title">Jenson</p>
                  <img src={TableImg} alt="" />
                  <Link className="yellow-btn" to="/products/jenson">Shop now</Link>
                </div>
                
                <div className="card card-2">
                  <p className="title">Deon</p>
                  <img src={ChairImg} alt="" />
                  <Link className="yellow-btn" to="/products/deon">Shop now</Link>
                </div>
                
                <div className="card card-3">
                  <p className="title">Krisha</p>
                  <img src={BowlsImg} alt="" />
                  <Link className="yellow-btn" to="/products/krisha">Shop now</Link>
                </div>

                
            </article>
        </section>
  )
}

export default Products
