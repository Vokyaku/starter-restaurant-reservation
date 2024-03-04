const knex = require("../db/connection");

async function list() {
  return knex("tables").select("*").orderBy("table_name");
}

// list free tables
async function listFree() {
  return knex("tables")
      .select("*")
      .where({ reservation_id: null })
      .orderBy("table_name")
  );
}

// knex creates table
async function create(table) {
  return knex("tables")
    .insert(table)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

async function read(table_id) {
  return knex("tables").select("*").where({ table_id }).first();
}

// knex.transaction updates table and reservation
async function update(updatedTable, updatedReservation) {
  const trx = await knex.transaction();

  return trx("tables")
    .select("*")
    .where({ table_id: updatedTable.table_id })
    .update(updatedTable, "*")
    .then(function () {
      return trx("reservations")
        .select("*")
        .where({ reservation_id: updatedReservation.reservation_id })
        .update(updatedReservation, "*");
    })
    .then(trx.commit)
    .catch(trx.rollback);
}

module.exports = {
  list,
  create,
  listFree,
  read,
  update,
};