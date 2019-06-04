const Main = (props) => (
  <div style={Styles.main}>
    <h1>{props.title}</h1>
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
}