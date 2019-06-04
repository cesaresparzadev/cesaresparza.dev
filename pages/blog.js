import Layout from './components/Layout';
import Main from './components/Main';
import Link from 'next/link';

const Blog = () => (
  <div>
    <Layout />
    <Main title="Blog" content="Blog Content" />
  </div>
)

export default Blog;