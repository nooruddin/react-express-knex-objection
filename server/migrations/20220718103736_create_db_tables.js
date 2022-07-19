exports.up = function (knex) {
  return knex.schema
    .createTable("educators", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("position").notNullable().defaultTo("Educator");
      table.string("email").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("students", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("course").notNullable();
      table
        .integer("educator_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("educators")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("students").dropTable("educators");
};
