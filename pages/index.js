import Layout from './components/Layout';
import Footer from './components/Footer';
import Blog from './components/Blog';
import fetch from 'isomorphic-unfetch';

const blogUrl = 'https://cesparza.dev/wp-json/wp/v2/posts/';

const Index = (blog) => (
  <div>
    <Layout />
    <Blog props={blog}/>
    <Footer />
  </div>
)

Index.getInitialProps = async function() {
  var res = await fetch(blogUrl);
  var data = await res.json();
  return {
    blog: data
  }
}

export default Index;