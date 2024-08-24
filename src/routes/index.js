// MVC model
// This file is used to separate the path and the function handlers
// which was written in the src/index.js file

/*
Trong thuc te moi tuyen duong se dc boc tach ra tung file
Moi route cua moi tai nguyen
*/

const newsRouter = require("./news.route");
const siteRouter = require("./site.route");

// Write a function that accepts an express instance
function route(app) {
  // app.get('/', (req, res) => {
  //     res.render('home')
  // })
  //
  // app.get('/search', (req, res) => {
  //     console.log(req.query.q)
  //     res.render('search')
  // })

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("");
  });

  // app.get('/news', (req, res) => {
  //   res.render('news')
  // })

  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
