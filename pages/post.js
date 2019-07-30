import Layout from './components/Layout';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

const blogUrl = 'http://50.116.12.123:5000/';

const parsedDate = (published) => {
  var pubDate = new Date(published);
  var formatted = pubDate.toLocaleDateString("en-US");
  return formatted;
}

const Post = (postData) => {
  const router = useRouter();
  const postId = router.query.id;
  var thisPost;

  Object.keys(postData).map((key) => {
    if(key === 'postData'){
      Object.keys(postData[key]).map(item => {
        if(postData[key][item].id === postId){
          thisPost = {
            id: postData[key][item].id,
            title: postData[key][item].title,
            content: postData[key][item].content,
            published: parsedDate(postData[key][item].published)
          }
        }
      })
    }
  });

  return (
    <div>
      <Layout />
      <div style={Styles.blogPost}>
        <h2>{thisPost.title}</h2>
        <p>{thisPost.content}</p>
        <p>PubDate: {thisPost.published}</p>
      </div>
    </div>
  );
}

Post.getInitialProps = async function() {  
  const url = blogUrl;
  var res = await fetch(url);
  var data = await res.json();
  return {
    postData: data
  }
}

export default Post;

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