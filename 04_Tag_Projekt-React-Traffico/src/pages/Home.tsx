import Blog from "../components/Blog/Blog"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import TextLPixR from "../components/TextLPixR/TextLPixR"
import TextRPixL from "../components/TextRPixL/TextRPixL"

const Home = () => {
  return (
    <div className="super-wrapper">
      <div className="wrapper">
      <Header/>
      <TextLPixR/>
      <TextRPixL/>
      <Blog/>
      <Footer/>
    </div>
    </div>
    
  )
}

export default Home
