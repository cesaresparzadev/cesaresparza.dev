const Header = () => (
  <div style={Styles.header}>
    <div style={Styles.header.bio}>
      <img src="https://avatars1.githubusercontent.com/u/6798420" style={Styles.header.bioImage} alt=""/>
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
    backgroundColor: '#3D3D4B',
    color: '#C2C2C2',
    justifyContent: 'center',
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