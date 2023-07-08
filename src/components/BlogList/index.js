import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {loading: true, blogData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({loading: false, blogData: updateData})
  }

  render() {
    const {blogData, loading} = this.state
    return (
      <div data-testid="loader">
        {loading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogData.map(eachItem => (
            <BlogItem blogInfo={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
