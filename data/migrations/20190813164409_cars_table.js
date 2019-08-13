
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl
          .string('name', 128)
          .unique()
          .notNullable();
        tbl.decimal('avg-mileage');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
