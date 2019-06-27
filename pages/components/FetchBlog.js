import fetch from 'isomorphic-unfetch';

const FetchBlog = () => {
  const markdownContext = require.context('../blog', false, /\.md$/);
  const markdownFiles = markdownContext.keys();
  return (
    <div>
      <h4>Blog</h4>
      <ul>
        {
          Object.keys(markdownFiles).map(key => {
            fetch(markdownContext[key])
            .then((response) => (response.text()))
            .then((data) => (
                <div>
                  <li>
                    .then Data: { data }
                  </li>
                </div>
              )
            )
            .catch((err) => (
                <div>
                  <li>
                    .catch Err: { err }
                  </li>
                </div>
            ))
          })
        }
      </ul>
    </div>
  )
}

export default FetchBlog;