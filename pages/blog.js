import Layout from './components/Layout';
import Footer from './components/Footer';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const blogUrl = 'http://50.116.12.123:5000/';

const parsedDate = (published) => {
  var pubDate = new Date(published);
  var formatted = pubDate.toLocaleDateString("en-US");
  return formatted;
}

const Blog = (blog) => (
  <div>
    <Layout />
    <div>
      <div>
        {Object.keys(blog).map((key) => {
          if(key === 'blog'){
            var obj = blog[key];
            var posts = Object.keys(obj).map(key => {
              var pubDate = obj[key].published;
              var formattedDate = parsedDate(pubDate);
              return (
                <div style={Styles.blogPost} key={obj[key].id}>
                  <Link href={`/post?id=${obj[key].id}`}>
                    <a><h3 key={obj[key].id}>{obj[key].title}</h3></a>
                  </Link>
                  <span>Published: {formattedDate}</span>
                  <p>{obj[key].content}</p>
                </div>
              )
            })
          return posts;
          }
        })}
      </div>
    </div>
    <Footer />
  </div>
)

Blog.getInitialProps = async function() {
  var res = await fetch(blogUrl);
  var data = await res.json();
  return {
    blog: data
  }
}

export default Blog;

const Styles = {
  list: {
    listStyleType: 'none'
  },
  blogPost: {
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
    padding: '25px',
    minHeight: '300px',
    minWidth: '300px',
  },
};