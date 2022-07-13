import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const app = express()
const PORT = 4000;

app.use(express.json());
  // const MONGO_URL = "mongodb://localhost";
  // const MONGO_URL = "mongodb://127.0.0.1"; //  nodejs - 16+
  const MONGO_URL = process.env.MONGO_URL;
  
  // Node - MongoDB
  async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected ✌😊");
    return client;
  }
  
  const client = await createConnection();
  
// hello world page
app.get('/', function (req, res) {
  res.send('Hello World✈🏁🌍🚩🛸🛩')
})

// movies api
app.get('/movies',async function(req,res){
  const movies = await client.db("movie_app").collection("movies").find({}).toArray();
  console.log("Movies" + movies);
  res.send(movies);
})

// to get only one parameter ex: ironman2
app.get('/movies/:id', async function (req,res){
  const{id} = req.params;
  console.log(req.params,id);
  // const movie = movies.filter((mv)=>mv.id===id);
  const movie = await client.db("movie_app").collection("movies").findOne({id:id})
  console.log(movie);
  movie? res.send(movie) : res.status(404).send({mgs:"movie not found"});
})

app.post('/movies', async function(req,res){
  const data = req.body;
  console.log(data);
  const result = await client.db("movie_app").collection("movies").insertMany(data);
  res.send(result);
})


app.listen(PORT,()=>console.log(`App started in ${PORT}`))