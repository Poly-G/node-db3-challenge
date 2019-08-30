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

function find() {
  return db("schemes");
}

function findById() {
  return db("schemes")
    .where({ id })
    .first();
}
