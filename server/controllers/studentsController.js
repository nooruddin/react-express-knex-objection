const Student = require("../models/Student");

const findAll = async (_req, res) => {
  const students = await Student.query();
  res.status(200).json(students);
};

const findOne = async (req, res) => {
  const student = await Student.query().findById(req.params.id);
  res.status(200).json(student);
};

const add = async (req, res) => {
  const newStudent = await Student.query().insert({ ...req.body });
  res.status(201).json(newStudent);
};

const update = async (req, res) => {
  const updatedStudent = await Student.query().patchAndFetchById(
    req.params.id,
    {
      ...req.body,
    }
  );

  res.status(200).json(updatedStudent);
};

const remove = async (req, res) => {
  const totalStudentsDeleted = await Student.query().deleteById(req.params.id);
  res.status(200).json({
    totalStudentsDeleted: totalStudentsDeleted,
    deletedStudentId: req.params.id,
  });
};

module.exports = {
  findAll,
  findOne,
  add,
  update,
  remove,
};
