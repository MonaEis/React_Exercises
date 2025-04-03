import { NavLink } from "react-router-dom";
import { carsData } from "../type";

const Home = () => {
    return (
        <section className="home">
            <div className="grid">
                {carsData.map((car) => (
                    <div key={car.id} className="App bg-color">
                        <h2>{car.CarMake}</h2>
                        <NavLink to={`/` + car.id}>Read more</NavLink>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
