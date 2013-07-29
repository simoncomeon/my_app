
/*
 * GET home page.
 */

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'BitLift 0.0.1' })
  });
};

/*exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};*/
