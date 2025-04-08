import { useContext } from "react"
import { switchThemeContext } from "../contexts/themeContext"
import SwitchThemeComponent from "../components/SwitchThemeComponent"

const HomePage = () => {

    // const switchTheme = useContext(switchThemeContext)
    // console.log(switchTheme)

    const {theme} = useContext(switchThemeContext)
    console.log(theme)

  return (
    <main className={theme} >
        <SwitchThemeComponent/>
        <h1>Eine super Headline</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat blanditiis suscipit odit mollitia sapiente hic minima eum fuga! Impedit facilis, animi esse ipsum fugit beatae quidem laborum vero magnam dicta sunt iste eligendi odit praesentium laboriosam consequatur hic ipsam repudiandae, eaque minus dolore eveniet natus molestiae! Labore illo expedita rerum delectus ullam blanditiis, fugiat deserunt reprehenderit nesciunt quas, nisi recusandae amet voluptatum corrupti ducimus. Aperiam voluptatem iusto, laborum molestiae beatae rerum eum eius repellendus quae vitae totam aspernatur! Consequuntur aliquam omnis tempore, fuga minima eveniet sequi perspiciatis, magnam velit aspernatur, ab soluta corrupti. Incidunt consectetur sed consequatur nesciunt veritatis?</p>
    </main>
  )
}

export default HomePage
