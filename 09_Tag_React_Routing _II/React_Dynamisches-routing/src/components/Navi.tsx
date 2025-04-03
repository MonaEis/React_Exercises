import { NavLink } from "react-router-dom";

const Navi = () => {
    return (
        <nav>
            <h5>My Life</h5>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
        </nav>
    );
};

export default Navi;
