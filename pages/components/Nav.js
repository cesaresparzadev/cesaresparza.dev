import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const page = router.query.page;
  return (
  <div style={Styles.nav}>
    <Link href="/"><a style={Styles.navlinks} className={( !page ? 'active' : 'navLink')}>Blog</a></Link>
    <Link href="/projects?page=projects" as="/projects"><a style={Styles.navlinks} className={( page === 'projects' ? 'active' : 'navLink')}>Projects</a></Link>
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