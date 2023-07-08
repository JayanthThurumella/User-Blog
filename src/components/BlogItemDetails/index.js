import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {loading: true, blogDetails: []}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    console.log(updateData)
    this.setState({loading: false, blogDetails: updateData})
  }

  renderBlogItemDetails = () => {
    const {blogDetails} = this.state

    return (
      <div className="blog-details-container">
        <h1 className="title">{blogDetails.title}</h1>
        <div className="blog-author-container">
          <img
            src={blogDetails.avatarUrl}
            className="author-logo"
            alt={blogDetails.author}
          />
          <p className="highlights">{blogDetails.author}</p>
        </div>
        <img
          src={blogDetails.imageUrl}
          alt={blogDetails.title}
          className="blog-details-image"
        />
        <p className="content">{blogDetails.content}</p>
      </div>
    )
  }

  render() {
    const {loading} = this.state

    return (
      <div>
        {loading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
