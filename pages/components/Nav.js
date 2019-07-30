import Link from 'next/link';

const Nav = () => (
  <div style={Styles.nav}>
    <Link href="/"><a style={Styles.navlinks}>Home</a></Link>
    <Link href="/blog"><a style={Styles.navlinks}>Blog</a></Link>
  </div>
)

export default Nav;

const Styles = {
  nav: {
    backgroundColor: '#3D3D4B',
    display: 'flex',
    padding: '20px 65px'
  },
  navlinks: {
    color: '#C2C2C2',
    fontSize: '20px',
    margin: '0 30px',
  },
}