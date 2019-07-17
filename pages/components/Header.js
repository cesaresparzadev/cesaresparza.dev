import Link from 'next/link';
const githubLink = 'https://www.linkedin.com/in/cesarjesparza/';

const Header = () => (
  <div style={Styles.header}>
    <div style={Styles.header.bio}>
      
      <div style={Styles.header.bioText}>
        <h4>Hi, I'm Cesar Esparza</h4>
        <p>I’m a Web Developer with a few years of professional experience working on both the front and back-end of web applications. I've created apps using JavaScript (React, jQuery, Vanilla), VBScript, and SQL.</p>
        <p>JavaScript | jQuery | React | SQL</p>
      </div>
      <Link href={githubLink}>
        <a target='_blank'><img src="https://avatars1.githubusercontent.com/u/6798420" style={Styles.header.bioImage} alt=""/></a>
      </Link>
    </div>
  </div>
)

export default Header;

const Styles = {
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,113,124,1) 0%, rgba(61,61,75,1) 64%)',
    color: '#C2C2C2',
    justifyContent: 'flex-end',
    padding: '50px',
    h1: {
      fontFamily: 'sans-serif'
    },
    bioImage: {
      borderRadius: '25px',
      marginBottom: '20px'
    },
    bio: {
      display: 'flex',
      alignItems: 'center',
    },
    bioText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '300px'
    }
  }
}