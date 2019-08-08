import Link from 'next/link';
import Layout from './components/Layout';
import Footer from './components/Footer';
import fetch from 'isomorphic-unfetch';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

const blogUrl = 'https://cesparza.dev/wp-json/wp/v2/posts/';

const parsedDate = (published) => {
  var pubDate = new Date(published);
  var formatted = pubDate.toLocaleDateString("en-US");
  return formatted;
}

const stripHtml = (html) => {
  return parse(html);
}

const Post = (blog) => {
  const router = useRouter();
  const postId = router.query.id;
  return (
    <div>
      <Layout />
        <div style={Styles.blog}>
          {Object.keys(blog).map((key) => {
            if(key === 'blog'){
              var obj = blog[key];
              var posts = Object.keys(obj).map(key => {
                var pubDate = obj[key].date;
                var formattedDate = parsedDate(pubDate);
                if(obj[key].id == postId){
                  return (
                  <div key={obj[key].id} style={Styles.post}>
                    <h3 key={obj[key].id} style={Styles.postTitle}>
                      {stripHtml(obj[key].title.rendered)}
                    </h3>
                    <div>{stripHtml(obj[key].content.rendered)}</div>
                    <span style={Styles.pubDate}>Published: {formattedDate}</span>
                  </div>
                  )
                }
              })
            return posts;
            }
          })}
        </div>
      <Footer />
    </div>
  )
}

Post.getInitialProps = async function() {
  var res = await fetch(blogUrl);
  var data = await res.json();
  return {
    blog: data
  }
}

export default Post;

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
    flexDirection: 'column',
    marginBottom: '50px'
  },
  postTitle: {
    color: 'rgb(61, 109, 121)'
  },
  pubDate: {
    color: '#6c757d',
    textAlign: 'right',
    margin: '0 20px 0 0'
  }
};