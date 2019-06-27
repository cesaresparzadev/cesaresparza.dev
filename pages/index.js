import Layout from './components/Layout';
import Main from './components/Main';
import Repos from './components/Repos';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <Layout />
    <Main title="My GitHub Repos" />
    <Repos collection={ props.collection } />
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.github.com/users/cesaresparzadev/repos');
  const data = await res.json();
  console.log(`Data fetched. Count: ${data.length}`);
  if(data.length){
    return {
      collection: data
    }
  } else {
    return {
      collection: null
    }
  }
}

export default Index;