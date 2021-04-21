if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/pony.js');
} else {
  module.exports = require('./dist/pony.min.js');
}
