type BlogArticeProps = {
    blogTitle: string;
    blogAuthor: string;
    blogDate: string;
    blogContent: string;
    blogImage: string;
  };


const BlogItem = (props: BlogArticeProps) => {
  return (
    <div className="blog-item">
      <h4>{props.blogTitle}</h4>
      <p>{props.blogDate}</p>
      <img src={props.blogImage} alt={props.blogTitle} />
        <p>{props.blogContent}</p>
        <h5>by {props.blogAuthor}</h5>
    </div>
  )
}

export default BlogItem
