import mongoose from "mongoose"
const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        index: true,
    },
    artist: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // in seconds
        required: true,
        min: 1,
    },
    genre: {
        type: String,
        default: 'Unknown'
    },
    audioUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
    
 export default mongoose.model('Song', songSchemaSchema)