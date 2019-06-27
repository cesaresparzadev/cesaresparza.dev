import Link from 'next/link';

const Nav = () => (
  <div style={Styles.nav}>
    {/* <Link href="/"><a style={Styles.navlinks}>Home</a></Link>
    <Link href="/blog"><a style={Styles.navlinks}>Blog</a></Link>
    <Link href="/contact"><a style={Styles.navlinks}>Contact</a></Link> */}
  </div>
)

export default Nav;

const Styles = {
  nav: {
    backgroundColor: '#3D3D4B',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0 20px 0'
  },
  navlinks: {
    color: '#C2C2C2',
    fontSize: '20px',
    margin: '0 30px',
  },
}