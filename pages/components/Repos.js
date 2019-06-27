import Link from 'next/link';

const Repos = props => {
  if(props.collection){
    return (
      <div style={Styles.div}>
        { props.collection.map(item => (
          <div key={item.id} style={Styles.repoCard}>
            <img src={`${item.html_url}/blob/master/screenshot.png?raw=true`} style={Styles.cardImg} />
            <Link href={item.html_url}>
              <a target='_blank' style={Styles.link}><h4 style={Styles.h1}>{item.name}</h4></a>
            </Link>          
            <p>{item.description}</p>
          </div>
        )) }
      </div>
    )
  } else {
    return (
      <div style={Styles.div}>
          <div key={item.id} style={Styles.repoCard}>
            <h4 style={Styles.link}>No Repos</h4>
          </div>
      </div>
    )
  }
}

export default Repos;

const Styles = {
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '0 100px'
  },
  repoCard: {
    borderRadius: '25px',
    color: 'rgb(243, 243, 243)',
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
    padding: '25px',
    minHeight: '300px',
    minWidth: '300px',
    maxHeight: '300px',
    maxWidth: '300px',
    textAlign: 'center',
    position: 'relative',
  },
  h1: {
    zIndex: '2'
  },
  cardImg: {
    borderRadius: '25px',
    position: 'absolute',
    opacity: '.25',
    top: '0',
    left: '0',
    width: '100%',
    height: 'auto',
    zIndex: '-1'
  },
  link: {
    color: 'rgb(243, 243, 243)',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
}