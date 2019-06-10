const Main = (props) => (
  <div style={Styles.main}>
    <h3 style={Styles.h}>{props.title}</h3>
    <p>{props.content}</p>
  </div>
)

export default Main;

const Styles = {
  main: {
    color: '#8C8686',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px'
  },
  h: {
    textTransform: 'uppercase'
  }
}