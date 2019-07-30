import Layout from './components/Layout';
import Footer from './components/Footer';
import Repos from './components/Repos';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <Layout />
    <Repos collection={ props.collection } />
    <Footer />
  </div>
)

Index.getInitialProps = async function() {
  var res = await fetch('https://api.github.com/users/cesaresparzadev/repos');
  var data = await res.json();
  console.log(`Data fetched. Count: ${data.length}`);
  if(data.length){
    console.log('Github repos fetched');
    return {
      collection: data
    }
  } else {
    data = require('./components/repos.json');
    console.log('Local JSON file loaded');
    return {
      collection: data
    }
  }
}

export default Index;