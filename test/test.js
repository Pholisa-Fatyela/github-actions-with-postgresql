const assert = require("assert");
const PgPromise = require("pg-promise");
require('dotenv').config();

describe('GitHub Actions', () => {

	const DATABASE_URL = process.env.DATABASE_URL;
	const pgp = PgPromise({});
	const db = pgp(DATABASE_URL);

	before( async () => {
		await db.none(`delete from users`);
	});

	it ('should be able to read from a database', async () => {

		await db.none(`insert into users (username, email) values ($1,$2)`, ['avee', 'avee@email.com'])
		await db.none(`insert into users (username, email) values ($1,$2)`, ['agee', 'agee@email.com'])

		const count = await db.one(`select count(*) from users`, [], r => r.count);
		assert.equal(2, count)

	});

	after(() => db.$pool.end() )


});