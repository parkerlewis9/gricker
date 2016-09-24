
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table){
    table.increments();
    table.timestamps()
    table.string("name");
    table.string("password");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
