import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogInfo} = props

  return (
    <Link to={`/blogs/${blogInfo.id}`} className="link-item">
      <div className="blog-item-container">
        <img
          src={blogInfo.imageUrl}
          className="blog-image"
          alt={blogInfo.title}
        />
        <div className="blog-info-container">
          <p className="highlights">{blogInfo.topic}</p>
          <h1>{blogInfo.title}</h1>
          <div className="blog-author-container">
            <img
              src={blogInfo.avatarUrl}
              className="author-logo"
              alt={blogInfo.author}
            />
            <p className="highlights">{blogInfo.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
