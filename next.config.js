const fetch = require('isomorphic-unfetch');

// export HTML
module.exports = {
  exportPathMap: async function() {
    const blogUrl = 'https://cesparza.dev/wp-json/wp/v2/posts/';
    const res = await fetch(blogUrl);
    const data = await res.json();
    const parseUrl = (url) => {
      var parsed = url.replace(/\s+/g, '-').toLowerCase();
      return parsed;
    }
    const paths = {
      '/': { page: '/' },
      '/blog': { page: '/post' },
      '/post': { page: '/post' },
      '/projects': { page: '/projects' },
    }

    data.forEach(post => {
      paths[`/blog/${parseUrl(post.title.rendered)}`] = { page: '/post', query: { id: post.id } }
    })

    return paths;
  }
};