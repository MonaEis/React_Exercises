import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Navi from "../../components/Navi/Navi";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <>
        <Navi/>
        <Header/>
        <Projects/>
        <Skills/>
        <Contact/>
        </>
      );
}
 
export default Home;