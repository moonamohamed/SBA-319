import express from "express"
import mongoose from "mongoose"

const app = express()
const PORT = 3000

app.get('/', (req, res)=> {
    res.send('boo')
}),

app.listen(3000, () => {
    console.log(`Listening on port http://localhost:${3000}`);
})