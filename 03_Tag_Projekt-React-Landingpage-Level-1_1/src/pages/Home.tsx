import Head from '../components/Head/Head'
import FirstSection from '../components/FirstSection/FirstSection'
import Rezepte from '../components/Rezepte/Rezepte'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Head/>
      <div className="wrapper">
        <FirstSection/>
      <Rezepte/>
      
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home
