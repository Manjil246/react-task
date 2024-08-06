import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { connectToMongo } from "./db.js"
import pokemonUser from "./routes/pokemonUser.js"
const app  = express()

app.use(express.json())
app .use(cors())
app.use(bodyParser.json());

app.use("/pokemon",pokemonUser)

connectToMongo()

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Social Media App Running on http://localhost:${port}`)
})