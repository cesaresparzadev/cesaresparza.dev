const express = require('express');
const next = require('next');
const contentful = require('contentful');
require('dotenv').config();

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

client.getEntries()
.then(function (entries) {
  entries.items.forEach(function (entry) {
    if(entry.fields.productName) {
      console.log(entry.fields.productName)
    }
  })
})

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.
  prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if(err) throw err;
      console.log('> Ready on http://localhost:3000');
    })
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1)
  });