import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

const Home = () => (
  <div data-testid="loader" className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
