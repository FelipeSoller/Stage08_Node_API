exports.up = knex => knex.schema.createTable('notes', table => {
  table.increments('id')
  table.text('title')
  table.text('description')
  table.integer('user_id').references('id').inTable('users')

  table.timestamps('created_at').default(knex.fn.now())
  table.timestamps('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('notes')
