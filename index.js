import express from "express"
import mongoose from "mongoose"
// import Users from "./model/song.js"
import 'dotenv/config'


const app = express()
const PORT = process.env.PORT


await mongoose.connect(process.env.MONGO_URL) 
   

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('boo')
}),

app.get('/users', async (req, res)=> {
    let Moon = await Users.find()
    res.send(Moon)
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})