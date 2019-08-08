const Styles = {
  main: {
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,113,124,1) 0%, rgba(61,61,75,1) 64%)',
  },
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
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#3D3D4B',
    color: '#C2C2C2',
    justifyContent: 'flex-end',
    paddingRight: '50px',
    h1: {
      fontFamily: 'sans-serif'
    },
    bio: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  list: {
    listStyleType: 'none'
  }
}

export default Styles;