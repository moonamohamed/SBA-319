import express from "express"
import mongoose from "mongoose"
import User from "./model/user.js"
// import song from "./model/song.js"
// import playlist from "./model/playlist.js"

import 'dotenv/config'
import user from "./model/user.js"


const app = express()
const PORT = process.env.PORT


await mongoose.connect(process.env.MONGO_URL) 
   

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('🌜Moon Tunes 🎵')
}),

app.post('/users', async(req, res)=> {
    try {
        const newUser = new User(req, res);
        awaitnewUser.save();
        res.status(201).json(newUser)
    } catch (error){
    res.status(400).json({error: error.message});
    }
});   

app.get('/users', async (req, res)=> {
    let user = await User.find();
    res.send(user)
});

app.patch('/users/:username', async(req, res)=> {
   try {
     const user= await User.findOneAndUpdate(
        {username: req.params.username},
        req.body,
        {new: true}
    );
    res.json(user);
   } catch {
    res.status(400).json({error: 'Failed updating'});
   }
});
app.delete('/users/:username', async (req, res)=> {
    await User.deleteOne({username: req.params.username});
    res.json({message: 'Deleting user'});
});




app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})