import Link from 'next/link';

const Footer = () => (
  <div style={Styles.footer}>
    <hr/>
    <Link href='/'>
      <a style={Styles.a}>CesarEsparza.dev</a>
    </Link>
      <span> - 
        <Link href='https://github.com/cesaresparzadev/cesaresparza.dev'><a> This site was built on React/Next</a></Link>
      </span>
  </div>
)

export default Footer;

const Styles = {
  footer: {
    color: 'rgb(93, 93, 93)',
    margin: '50px 0 25px 0',
    textAlign: 'center'
  },
  a: {
    color: 'rgb(140, 134, 134)'
  }
}