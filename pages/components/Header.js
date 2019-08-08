import Link from 'next/link';
const githubLink = 'https://github.com/cesaresparzadev?tab=repositories';
const linkedInLink = 'https://www.linkedin.com/in/cesarjesparza/';

const Header = () => (
  <div style={Styles.header}>
    <div style={Styles.header.bio}>
      <Link href={linkedInLink}>
        <a target='_blank'><img src="https://avatars1.githubusercontent.com/u/6798420" style={Styles.header.bioImage} alt=""/></a>
      </Link>
      <div style={Styles.header.bioText}>
        <h4>Hi, I'm Cesar Esparza</h4>
        <p style={Styles.header.para}>I’m a Web Developer with over 3 years of professional experience 
          working on both the front and back-end of web applications. 
          I've built apps using JavaScript (React, jQuery, Vanilla), VBScript, and SQL (T-SQL, MySQL).</p>
        <div style={Styles.header.social}>
          <Link href={linkedInLink}>
            <a target='_blank'><img src="/static/img/linkedin.png" alt="LinkedIn" style={Styles.header.socialImg} /></a>
          </Link>
          <Link href={githubLink}>
            <a target='_blank'><img src="/static/img/github.png" alt="GitHub" style={Styles.header.socialImg} /></a>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )

export default Header;

const Styles = {
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,113,124,1) 0%, rgba(61,61,75,1) 64%)',
    color: '#C2C2C2',
    justifyContent: 'flex-start',
    paddingBottom: '50px',
    h1: {
      fontFamily: 'sans-serif'
    },
    bioImage: {
      borderRadius: '25px',
      margin: '35px'
    },
    bio: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    bioText: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginLeft: '35px',
      justifyContent: 'center',
      width: '375px',
    },
    para: {
      maxWidth: '90%'
    },
    social: {
      display: 'flex'
    },
    socialImg: {
      width: '30px',
      height: 'auto',
      marginTop: '20px',
      marginRight: '10px'
    }
  }
}