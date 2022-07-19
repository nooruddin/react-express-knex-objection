const Model = require("../objection");

class Educator extends Model {
  static tableName = "educators";

  static get relationMappings() {
    const Student = require("./Student");
    return {
      students: {
        relation: Model.HasManyRelation,
        modelClass: Student,
        join: {
          from: "educators.id",
          to: "students.educator_id",
        },
      },
    };
  }
}

module.exports = Educator;
