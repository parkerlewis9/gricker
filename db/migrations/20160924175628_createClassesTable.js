
exports.up = function(knex, Promise) {
  return knex.schema.createTable("classes", function(table){
    table.increments();
    table.timestamps();
    table.string("name");
    table.bigInteger('user_id').unsigned().index().references('id').inTable('users').onDelete("cascade");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("classes")
};
