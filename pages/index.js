import Layout from './components/Layout';
import Main from './components/Main';
import FetchRepos from './components/FetchRepos';

const Index = props => (
  <div>
    <Layout />
    <Main title="My GitHub Repos" />
    <FetchRepos collection={ props.collection } />
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.github.com/users/cesaresparzadev/repos');
  const data = await res.json();
  console.log(`Data fetched. Count: ${data.length}`);
  return {
    collection: data
  }
}

export default Index;