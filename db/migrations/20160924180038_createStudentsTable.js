
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(table){
    table.increments();
    table.timestamps();
    table.string("name");
    table.bigInteger("class_id").unsigned().index().references("id").inTable("classes").onDelete("cascade");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("students");
};
