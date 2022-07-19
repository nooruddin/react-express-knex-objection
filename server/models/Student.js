const Model = require("../objection");
const Educator = require("./Educator");

class Student extends Model {
  static tableName = "students";

  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Educator,
      join: {
        from: "students.educator_id",
        to: "educators.id",
      },
    },
  };
}

module.exports = Student;
