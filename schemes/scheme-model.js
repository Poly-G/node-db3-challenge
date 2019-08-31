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

function findSteps(scheme_id) {
  return db("steps as s")
    .join("schemes as sc", "sc.id", "s.scheme_id")
    .select("s.id", "sc.scheme_name", "s.step_number", "s.instructions")
    .where({ scheme_id });
}

async function add(scheme) {
  try {
    const [newId] = await db("schemes").insert(scheme);
    return await findById(newId);
  } catch (err) {
    throw new Error(err);
  }
}

async function update() {
  try {
    const updateItem = await db("schemes")
      .update(edits)
      .where({ id });
    return updateItem;
  } catch {
    throw new Error(err);
  }
}

async function remove(id) {
  try {
    deletedPost = await findById(id);
    const getPost = await db("schemes")
      .where({ id })
      .del();
    return getPost ? deletedPost : null;
  } catch {
    throw new Error(err);
  }
}
