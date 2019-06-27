import Layout from './components/Layout';
import Main from './components/Main';
import FetchBlog from './components/FetchBlog';

const Blog = () => (
  <div>
    <Layout />
    <Main title="Blog" content="Blog Content" />
    <FetchBlog />
  </div>
)

export default Blog;