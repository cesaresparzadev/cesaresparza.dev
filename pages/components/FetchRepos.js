import Link from 'next/link';

const FetchRepos  = props => (
    <div style={Styles.div}>
      <ul style={Styles.ul}>
        { props.collection.map(item => (
          <li key={item.id}>
            <Link href={item.html_url}>
              <a target='_blank'>{item.name}</a>
            </Link>
            - {item.description}
          </li>
        )) }
      </ul>
    </div>
)

export default FetchRepos;

const Styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ul: {
    listStyleType: 'none',
    width: '50%'
  }
}