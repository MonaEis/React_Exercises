import { NavLink } from "react-router-dom"
import { blogData } from "../types"


const Blog = () => {

  
  return (
    <section className="blog">
      {blogData.map((item)=>(
        <div key={item.id}>
          <img src={item.img_url} alt={item.title} />
          <h4>{item.title}</h4>
          <NavLink className="button" to={`/blog/` + item.id}>Read more</NavLink>
        </div>
      ))}
      
    </section>
  )
}

export default Blog
