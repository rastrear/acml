/* eslint-disable */
const r = require('./');

r.allEvents('2973123')
  .then(data => console.log(data))
  .catch(error => console.log(error));