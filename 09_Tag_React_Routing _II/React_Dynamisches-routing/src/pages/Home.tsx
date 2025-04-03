import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <section className="home">
            <article>
              <h1>Welcome to my 
              simple Blog</h1>
              <NavLink className="button" to="/blog">Go to articles</NavLink>
            </article>
        </section>
    );
};

export default Home;
