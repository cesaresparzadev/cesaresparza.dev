import Link from 'next/link';
const githubLink = 'https://github.com/cesaresparzadev';

const Header = () => (
  <div style={Styles.header}>
    <div style={Styles.header.bio}>
      <Link href={githubLink}>
        <a target='_blank'><img src="https://avatars1.githubusercontent.com/u/6798420" style={Styles.header.bioImage} alt=""/></a>
      </Link>
      <div style={Styles.header.bioText}>
        <h4>Cesar Esparza</h4>
        <h5>Web App Developer</h5>
        <p>JavaScript | jQuery | React | SQL</p>
      </div>
    </div>
  </div>
)

export default Header;

const Styles = {
  header: {
    display: 'flex',
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,113,124,1) 0%, rgba(61,61,75,1) 64%)',
    color: '#C2C2C2',
    justifyContent: 'center',
    padding: '50px 0',
    h1: {
      fontFamily: 'sans-serif'
    },
    bioImage: {
      height: '150px',
      width: '150px',
      marginBottom: '20px'
    },
    bio: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    bioText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
}