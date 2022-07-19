const router = require("express").Router();
const educatorsController = require("../controllers/educatorsController");

router
  .route("/")
  .get(educatorsController.findAll)
  .post(educatorsController.add);

router
  .route("/:id")
  .get(educatorsController.findOne)
  .patch(educatorsController.update)
  .delete(educatorsController.remove);

module.exports = router;
