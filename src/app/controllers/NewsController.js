class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /news/:slug
  // Slug la 1 cai param bien dong
  show(req, res) {
    res.send('Bro got a scholarship!!!!');
  }
}

module.exports = new NewsController();
