const { MongoClient, ServerApiVersion } = require('mongodb');

/**
 * @type {import("mongodb").Db}
 */
let db;

const DbConnect = async () => {
	if (db) return db;
	try {
		// const uri = 'mongodb+srv://mmh_admin:<password>@cluster0.g7jeb4r.mongodb.net/?retryWrites=true&w=majority';
		const uri = process.env.db_uri;

		// Create a MongoClient with a MongoClientOptions object to set the Stable API version
		const client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});

		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		db = client.db('easy-shop');
		await client.db('admin').command({ ping: 1 });
		console.log(
			'Pinged your deployment. You successfully connected to MongoDB!'
		);
		return db;
	} catch (error) {
		console.log(error.message);
	}
};

export default DbConnect;

/* async function run() {
	try {
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir); */
