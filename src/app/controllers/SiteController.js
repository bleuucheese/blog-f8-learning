const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  index(req, res, next) {
    // res.json({
    //   name: "test",
    // });
    // No longer accepts a callback
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(500).json({ error: "ERROR!!!!" });
    //   }
    // });

    // try {
    //   const courses = await Course.find({});
    //   res.json(courses);
    // } catch (err) {
    //   res.status(400).json({ error: err });
    // }

    // Promise
    // Course.find({}).then(courses => {
    //   res.json(courses);
    // }).catch(err => {console.log(err);
    // res.status(404).json({error: err});
    // res.render("home");

    // Course.find({})
    //   .lean()
    //   .then((courses) => res.render("home", { courses }))
    //   .catch(next);

    Course.find({})
      .then((courses) =>
        res.render("home", { courses: multipleMongooseToObject(courses) }),
      )
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
