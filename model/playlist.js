import mongoose from "mongoose"
const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    songs: [
        {
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        duration: {
            type: Number
        },

    }
],
});

 export default mongoose.model('Playlist', playlistSchema, "playlist")
