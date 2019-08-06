import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
  <div style={Styles.nav}>
    <Link href="/"><a style={Styles.navlinks} className={(router.query.page === 'blog' ? '' : 'active')}>Home</a></Link>
    <Link href="/blog?page=blog" as="/blog"><a style={Styles.navlinks} className={(router.query.page === 'blog' ? 'active' : '')}>Blog</a></Link>
  </div>
  )
}

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