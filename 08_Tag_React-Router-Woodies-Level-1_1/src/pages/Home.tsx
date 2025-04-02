import { Link } from "react-router-dom";
import TableImg from "../assets/img/Home_Table.png";

const Home = () => {
    return (
        <section className="home">
            <article>
                <div>
                    <h2>
                        Are you looking for <span>woodden furniture</span> for your place?
                    </h2>
                    <h1>This is the Right Place</h1>
                    <Link className="yellow-btn" to="/products">Explore Categories</Link>
                </div>
                <img src={TableImg} alt="Table" />
            </article>
        </section>
    );
};

export default Home;
