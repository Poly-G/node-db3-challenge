const knex = require("knex");

const db = knex(require("../knexfile").development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
