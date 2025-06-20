import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

 export default mongoose.model('Users', userSchema)
