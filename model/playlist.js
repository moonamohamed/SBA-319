import mongoose from "mongoose"
const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
        trim: true,
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
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

 export default mongoose.model('Playlist', playlistSchemaSchema)
