if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/pony.development')
} else {
  module.exports = require('./dist/pony.production')
}
