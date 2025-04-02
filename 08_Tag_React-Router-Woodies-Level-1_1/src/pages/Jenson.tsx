import Icon from "../assets/img/Icon.png"
import TableImg from "../assets/img/Table_Products.png"


const Jenson = () => {
  return (
    <section className="single-product">
            <article className="intro">
                <div className="icon-left">
                    <img src={Icon} alt="Icon" />
                    <h2>Jenson</h2>
                </div>
                <div className="line"></div>
                <h3>Products</h3>
            </article>

            <article className="single-product-content">
                <div className="card card-1">
                  <img src={TableImg} alt="" />
                </div>
                
                <h5>
                Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.
                </h5>
               

                
            </article>
        </section>
  )
}

export default Jenson
