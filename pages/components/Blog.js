import parse from 'html-react-parser';
import Link from 'next/link';

const Blog = (props) => {
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

  var contents;
  Object.keys(props).map((key) => {
    if(key === 'props'){
      contents = props[key];
    }
  })
  var posts = [];
  Object.keys(contents['blog']).map(key => {
    posts.push(contents['blog'][key]);
  })

  var eachPost = posts.map(key => {
    var pubDate = key.date;
    var formattedDate = parsedDate(pubDate);
    var href= `/post?id=${key.id}`;
    var hrefAs = `/blog/${parseUrl(key.title.rendered)}`;
    return (
      <div key={key.id} className="blog">
        <div style={Styles.post}>
          <Link href={href} as={hrefAs}>
            <a><h3 key={key.id} style={Styles.postTitle}>{stripHtml(key.title.rendered)}</h3></a>
          </Link>
          <div>{stripHtml(key.content.rendered)}</div>
        </div>
        <div style={Styles.postFooter}>
          <Link href={href} as={hrefAs}>
            <a><span>Read more...</span></a>
          </Link>
          <span style={Styles.pubDate}>Published: {formattedDate}</span>
        </div>
      </div>
  )})

  return (
    <div>
      <h3 style={Styles.headerTitle}>MY BLOG</h3>
      <hr/>
      <div style={Styles.blogPage}>
        <div style={Styles.blog}>
          {eachPost}
        </div>
      </div>
    </div>
  )
  
}

export default Blog;

const Styles = {
  list: {
    listStyleType: 'none'
  },
  blogPage: {
    display: 'flex',
    flexWrap: 'wrap'

  },
  blog: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 25px',
    padding: '25px',
    maxWidth: '90%',
    overflow: 'hidden'
  },
  headerTitle: {
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
  },
};