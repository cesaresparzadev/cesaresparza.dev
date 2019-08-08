import Layout from './components/Layout';
import Repos from './components/Repos';
import Footer from './components/Footer';
import Link from 'next/link';

const isLanguage = (language) => {
  if(language){
    const langVal = "Language: " + language;
    return langVal;
  }
}

const Projects = props => (
  <div>
    <Layout />
    <Repos collection={ props.collection }/>
    <Footer />
  </div>
  )

export default Projects;

Projects.getInitialProps = async function() {
  var res = await fetch('https://api.github.com/users/cesaresparzadev/repos');
  var data = await res.json();
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

const Styles = {
  main: {
    color: '#777373',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px'
  },
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  repoCard: {
    borderRadius: '25px',
    border: '2px solid rgba(194, 194, 194, .5)',
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
    padding: '25px',
    minHeight: '300px',
    minWidth: '300px',
    maxHeight: '300px',
    maxWidth: '300px',
    position: 'relative',
  },
  lang: {
    fontSize: '14px'
  },
  h: {
    zIndex: '2',
    color: '#3d6d79',
    fontSize: '16px'
  },
  cardImg: {
    borderRadius: '25px',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: 'auto'
  },
  link: {
    color: 'rgb(76, 75, 75)',
    textTransform: 'uppercase',
    textAlign: ''
  }
}