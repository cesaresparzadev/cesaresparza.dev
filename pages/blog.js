import Layout from './components/Layout';
import Footer from './components/Footer';
import fetch from 'isomorphic-unfetch';

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
      <div style={Styles.blog} >
        {Object.keys(blog).map((key) => {
          if(key === 'blog'){
            var obj = blog[key];
            var posts = Object.keys(obj).map(key => {
              var pubDate = obj[key].published;
              var formattedDate = parsedDate(pubDate);
              return (
                <div key={obj[key].id} style={Styles.post}>
                  {/* <Link href={`/post?id=${obj[key].id}`} as={`/${obj[key].title}`}> */}
                  <h3 key={obj[key].id}>{obj[key].title}</h3>
                  {/* </Link> */}
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
  blog: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: '25px',
    padding: '25px',
  },
  post: {
    width: '650px'
  }
};