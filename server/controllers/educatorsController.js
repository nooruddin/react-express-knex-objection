const Educator = require("../models/Educator");

const findAll = async (_req, res) => {
  const educators = await Educator.query();
  res.status(200).json(educators);
};

const findOne = async (req, res) => {
  const educator = await Educator.query().findById(req.params.id);
  res.status(200).json(educator);
};

const add = async (req, res) => {
  const newEducator = await Educator.query().insert({ ...req.body });
  res.status(201).json(newEducator);
};

const update = async (req, res) => {
  const updatedEducator = await Educator.query().patchAndFetchById(
    req.params.id,
    {
      ...req.body,
    }
  );

  res.status(200).json(updatedEducator);
};

const remove = async (req, res) => {
  const totalEducatorsDeleted = await Educator.query().deleteById(
    req.params.id
  );
  res.status(200).json({
    totalEducatorsDeleted: totalEducatorsDeleted,
    deletedEducatorId: req.params.id,
  });
};

module.exports = {
  findAll,
  findOne,
  add,
  update,
  remove,
};
