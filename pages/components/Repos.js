import Link from 'next/link';

const isLanguage = (language) => {
  if(language){
    const langVal = "Language: " + language;
    return langVal;
  }
}

const Repos = props => (
  <div>
    <h3 style={Styles.reposTitle}>PROJECTS</h3>
    <span style={Styles.titleSpan}>My <Link href='https://github.com/cesaresparzadev/'><a target='_blank'>GitHub</a></Link> public repos</span>
    <hr/>
    <div style={Styles.main}>
    <div style={Styles.div}>
      { props.collection.map(item => (
        <div key={item.id} style={Styles.repoCard}>
          <Link href={item.html_url}>
            <a target='_blank' style={Styles.link} className="cardLink">
              <h4 style={Styles.h}>{item.name}</h4>
              <img src={`${item.html_url}/blob/master/screenshot.png?raw=true`} style={Styles.cardImg} className="cardImg"/>
            </a>
          </Link>
          <p>{item.description}</p>
          <p style={Styles.lang}>{isLanguage(item.language)}</p>
        </div>
        )) }
      </div>
    </div>  
  </div>
  )

export default Repos;

const Styles = {
  main: {
    color: '#777373',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: '50px'
  },
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  reposTitle: {
    color: 'rgb(61, 109, 121)',
    margin: '25px 0 5px 50px',
  },
  titleSpan: {
    margin: '0 50px',
  },
  repoCard: {
    borderRadius: '25px',
    border: '2px solid rgba(194, 194, 194, .5)',
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
    padding: '25px',
    minHeight: '300px',
    minWidth: '300px',
    maxHeight: '300px',
    maxWidth: '300px',
    position: 'relative',
  },
  lang: {
    fontSize: '14px'
  },
  h: {
    zIndex: '2',
    color: '#3d6d79',
    fontSize: '16px'
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
  }
}