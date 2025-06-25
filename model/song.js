import mongoose from "mongoose"
const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        },
    artist: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // in seconds
        required: true,
    },
    genre: {
        type: String,
        default: 'Unknown'
    },
    
});
    
 export default mongoose.model('Song', songSchema)