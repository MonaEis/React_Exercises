import { useParams } from "react-router-dom";
import { blogData } from "../types";

const Details = () => {

  const { id } = useParams();
  console.log(id)

  const articleToShow = blogData.filter((item)=> item.id.toString() === id)
  console.log(articleToShow)

  return (
    <section className="details">
      {articleToShow.map((blog)=>(
        <article>
        <img src={blog.img_url} alt={blog.title} />
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>{blog.author}</p>
        </div>
        </article>
      ))}
      
    </section>
  )
}

export default Details
