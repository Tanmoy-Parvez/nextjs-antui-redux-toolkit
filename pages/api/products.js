// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongo_db_user:123456789abc@cluster0.wh888.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export default async function handler(req, res) {
  await client.connect();
  const usersCollections = client.db("tech_products").collection("items");
  if (req.method === "GET") {
    const result = await usersCollections.find({}).toArray();
    console.log("get result", result);
    res.status(200).send(result)
  }
  if (req.method === "POST") {
    const user = req.body
    const result = await usersCollections.insertOne(user);
    // console.log("post result", result);
    res.status(200).send(result)
  }
}


