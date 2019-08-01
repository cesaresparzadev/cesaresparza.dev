import Layout from './components/Layout';
import Footer from './components/Footer';
import fetch from 'isomorphic-unfetch';
import parse from 'html-react-parser';

const blogUrl = 'https://cesparza.dev/wp-json/wp/v2/posts/';

const parsedDate = (published) => {
  var pubDate = new Date(published);
  var formatted = pubDate.toLocaleDateString("en-US");
  return formatted;
}

const stripHtml = (html) => {
  return parse(html);
}

const Blog = (blog) => (
  <div>
    <Layout />
      <div style={Styles.blog} >
        {Object.keys(blog).map((key) => {
          if(key === 'blog'){
            var obj = blog[key];
            var posts = Object.keys(obj).map(key => {
              var pubDate = obj[key].date;
              var formattedDate = parsedDate(pubDate);
              return (
                <div key={obj[key].id} style={Styles.post}>
                  <h3 key={obj[key].id} style={Styles.postTitle}>{stripHtml(obj[key].title.rendered)}</h3>
                  <p>{stripHtml(obj[key].content.rendered)}</p>
                  <span style={Styles.pubDate}>Published: {formattedDate}</span>
                </div>
              )
            })
          return posts;
          }
        })}
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
    width: '90%',
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column'
  },
  postTitle: {
    color: '#777373'
  },
  pubDate: {
    textAlign: 'right',
    margin: '0 20px 0 0'
  }
};