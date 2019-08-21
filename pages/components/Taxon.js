import Link from 'next/link';

const parseUrl = (url) => {
  var parsed = url.replace(/\s+/g, '-').toLowerCase()
  return parsed
}

const Taxon = (blog) => {
  var title = [];
  Object.keys(blog).forEach(function(key){
    var obj = blog[key];
    Object.keys(obj).forEach(function(k){
      var entry = obj[k];
      Object.keys(entry).forEach(function(key){
        if(entry[key].hasOwnProperty('title')){
          title.push(entry[key].title.rendered);
        }
      })
    })
  });

  const tax = (
    <div>
      <ul>
        <li>...</li>
      </ul>
    </div>
  )

  return tax; 
  // (
  //   <div style={Styles.taxon}>
  //     {title.map(item => (
  //       <Link href={`/blog/${parseUrl(item)}`}>
  //         <a key={item} style={Styles.li}>{item}</a>
  //       </Link>
  //     ))}
  //   </div>
  // )
}

export default Taxon;

const Styles = {
  taxon: {
    display: 'flex',
    flexDirection: 'column',
  }
}