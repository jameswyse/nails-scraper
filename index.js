var cheerio  = require('cheerio');

exports = module.exports = {};

exports.name = 'scraper';
exports.type = 'service';

exports.register = function(app, options, next) {
  var scraper = cheerio.load;
  app.service.register('scraper', scraper);

  next();
};
