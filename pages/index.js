import Layout from './components/Layout';
import Footer from './components/Footer';
import fetch from 'isomorphic-unfetch';
import parse from 'html-react-parser';
import Link from 'next/link';

const blogUrl = 'https://cesparza.dev/wp-json/wp/v2/posts/';

const parsedDate = (published) => {
  var pubDate = new Date(published);
  var formatted = pubDate.toLocaleDateString("en-US");
  return formatted;
}

const stripHtml = (html) => {
  return parse(html);
}

const parseUrl = (url) => {
  var parsed = url.replace(/\s+/g, '-').toLowerCase()
  return parsed
}

const Index = (blog) => (
  <div>
    <Layout />
      <h3 style={Styles.blogTitle}>MY BLOG</h3>
      <hr/>
      <div style={Styles.blog} >
        {Object.keys(blog).map((key) => {
          if(key === 'blog'){
            var obj = blog[key];
            var posts = Object.keys(obj).map(key => {
              var pubDate = obj[key].date;
              var formattedDate = parsedDate(pubDate);
              var href= `/post?id=${obj[key].id}`;
              var hrefAs = `/blog/${parseUrl(obj[key].title.rendered)}`;
              return (
                <div key={obj[key].id} className="blog">
                  <div style={Styles.post}>
                    <Link href={href} as={hrefAs}>
                      <a><h3 key={obj[key].id} style={Styles.postTitle}>{stripHtml(obj[key].title.rendered)}</h3></a>
                    </Link>
                    <div>{stripHtml(obj[key].content.rendered)}</div>
                  </div>
                  <div style={Styles.postFooter}>
                    <Link href={href} as={hrefAs}>
                      <a><span>Read more...</span></a>
                    </Link>
                    <span style={Styles.pubDate}>Published: {formattedDate}</span>
                  </div>
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

Index.getInitialProps = async function() {
  var res = await fetch(blogUrl);
  var data = await res.json();
  return {
    blog: data
  }
}

export default Index;

const Styles = {
  list: {
    listStyleType: 'none'
  },
  blog: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '25px',
    padding: '25px',
    maxWidth: '90%',
    overflow: 'hidden'
  },
  blogTitle: {
    color: 'rgb(61, 109, 121)',
    margin: '25px 50px',
  },
  post: {
    width: '70%',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '280px',
    overflow: 'hidden',
    alignContent: 'flex-start'
  },
  postTitle: {
    color: 'rgb(61, 109, 121)'
  },
  pubDate: {
    color: '#6c757d',
    marginLeft: '45px'
  },
  postFooter: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 0'
  }
};