const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://sinclair335648:Lyh3356485569@animated-portfolio.q0no6xs.mongodb.net/?retryWrites=true&w=majority&appName=animated-portfolio";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("test_database");
    const myColl = database.collection("example_collection");

    const doc = { name: "Neapolitan pizza", shape: "round" };
    const result = await myColl.find();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
