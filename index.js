import express from "express"
import mongoose from "mongoose"
import User from "./model/user.js"
import Song from "./model/song.js"
import Playlist from "./model/playlist.js"


// import song from "./model/song.js"
// import playlist from "./model/playlist.js"

import 'dotenv/config'


const app = express()
const PORT = process.env.PORT


await mongoose.connect(process.env.MONGO_URL) 
   

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('🌜Moon Tunes 🎵')
}),

app.post('/users', async(req, res)=> {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
    } catch (error){
    res.status(500).json({error: error.message});
    }
});   

app.get('/users', async (req, res)=> {
    let users = await User.find();
    res.send(users)
});

app.get('/users/:id', async (req, res)=> {
    let users = await User.findById();
    res.send(users)
});

app.put('/users/:id', async(req, res)=>{
    try{
        const {id}= req.params;
        const review = await User.findByIdAndUpdate(id, req.body)
        
        if(!user){
            return res.status(404).json({message: "User not found"});
        }else{
            const userUpdated = await User.findById(id);
            res.status(200).json(userUpdated);
        }  
    }
catch(error){
    res.status(500).json({message: error.message});
}
});app.delete('/users/:id', async (req, res)=> {
       try {
    const {id}= req.params
    const user= await User.findByIdAndDelete(id);
    if(!user)
        return res.json({message: 'User not found'});
   } catch (error) {
     res.status(500).json({error: error.message});
   }
});

app.post('/songs', async(req, res)=> {
    try {
        const song= await song.create(req.body);
        res.status(201).json(song);
    } catch (error){
    res.status(400).json({error: error.message});
    }
});   

app.get('/songs', async (req, res)=> {
    let songs= await Song.find();
    res.send(songs)
});

app.put('/songs/:id', async(req, res)=>{
    try{
        const {id} =req.params;
        const song = await Song.findByIdAndUpdate(id, req.body)
        
        if(!song){
            return res.status(404).json({message: "Song not found"});
        }else{
            const songUpdated = await User.findById(id);
            res.status(200).json(songUpdated);
        }  
    }
catch(error){
    res.status(500).json({message: error.message});
}
});
   
app.delete('/songs/:id', async (req, res)=> {
       try {
    const {id}= req.params
    const song= await Song.findByIdAndDelete(id);
    if(!song)
        return res.json({message: 'Deleting song'});
   } catch (error) {
     res.status(500).json({error: error.message});
   }
});

app.post('/playlists', async(req, res)=> {
    try {
        const playlist = await Playlist.create(req.body);
        res.status(200).json(playlist);
    } catch (error){
    res.status(500).json({error: error.message});
    }
});   

app.get('/playlists', async (req, res)=> {
    let playlists = await Playlist.find();
    res.send(playlists)
});

app.put('playlists/:id', async(req, res)=>{
    try{
        const {id} =req.params;
        const playlist = await Playlist.findByIdAndUpdate(id, req.body)
        
        if(!playlist){
            return res.status(404).json({message: "Playlist not found"});
        }else{
            const playlistUpdated = await User.findById(id);
            res.status(200).json(playlistUpdated);
        }  
    }
catch(error){
    res.status(500).json({message: error.message});
}
});
app.delete('/playlists/:id', async (req, res)=> {
   try {
    const {id}= req.params
    const playlist= await Playlist.findByIdAndDelete(id);
    if(!playlist)
        return res.json({message: 'Cannot find playlist'});
   } catch (error) {
     res.status(500).json({error: error.message});
   }
});



app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})