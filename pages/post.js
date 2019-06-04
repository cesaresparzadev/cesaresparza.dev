import Layout from './components/Layout';

const Post = (props) => (
  <div>
    <Layout />
    <div>
      <h1>{props.title}</h1>
    </div>
  </div>
)

export default Post;