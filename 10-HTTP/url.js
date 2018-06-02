// ============================================================
// URL 
// url.parse

const url = require('url');

console.log( url.parse('https://www.bing.com/search?q=streamifier&pc=MOZI&form=MOZLBR') );

console.log( url.format({
  protocol: 'https',
  host: 'www.pluralsight.com',
  search: '?q=buna',
  pathname: '/search'
});

