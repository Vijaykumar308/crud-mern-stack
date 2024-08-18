import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email format validation
    }, 
    message: {
        type: String,
        required: true,
        minlength: 10
    },  
},
{
    "timestamps": true // Optional: adds createdAt and updatedAt timestamps
})

const contactUs = mongoose.model('connectUs', contactUsSchema);