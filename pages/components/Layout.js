import Head from 'next/head';
import Header from './Header';
import Nav from './Nav';
import Styles from './Styles';

const Layout = (props) => (
  <div>
    <Head>
      <title>cesaresparza.dev</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/css/styles.css"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145441121-1"></script>
      <script src="text/javascript" src="/static/js/ga.js"></script>
    </Head>
    <Nav />
    <Header />
    <div style={Styles.main}>
      { props.children }
    </div>
  </div>
)

export default Layout;