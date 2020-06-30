import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class States extends BaseSchema {
	protected tableName = 'states'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('label')
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
