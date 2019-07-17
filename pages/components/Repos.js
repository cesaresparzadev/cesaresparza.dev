import Link from 'next/link';

const Repos = props => (
      <div style={Styles.div}>
        { props.collection.map(item => (
          <div key={item.id} style={Styles.repoCard}>
            <Link href={item.html_url}>
              <a target='_blank' style={Styles.link} className="cardLink">
                <h4 style={Styles.h1}>{item.name}</h4>
                <img src={`${item.html_url}/blob/master/screenshot.png?raw=true`} style={Styles.cardImg} className="cardImg"/>
              </a>
            </Link>
            <p>{item.description}</p>
          </div>
        )) }
      </div>
    )

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
    top: '0',
    left: '0',
    width: '100%',
    height: 'auto'
  },
  link: {
    color: 'rgb(76, 75, 75)',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
}