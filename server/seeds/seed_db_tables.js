// import seed data files, arrays of objects
const educatorData = require("../seed_data/educator");
const studentData = require("../seed_data/student");

exports.seed = function (knex) {
  return knex("educators")
    .del()
    .then(function () {
      return knex("educators").insert(educatorData);
    })
    .then(() => {
      return knex("students").del();
    })
    .then(() => {
      return knex("students").insert(studentData);
    });
};
