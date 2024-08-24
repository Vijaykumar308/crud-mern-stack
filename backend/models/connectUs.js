import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        // minlength: 1
    },
    email: {
        type: String,
        required: true,
        // match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email format validation
    },
    password: {
        type: String,
        required: true,
        // minlength: 6
    }, 
    message: {
        type: String,
        required: true,
        // minlength: 10
    },  
},
{
    "timestamps": true // Optional: adds createdAt and updatedAt timestamps
})

const ContactUs = mongoose.model('connectUs', contactUsSchema);

export default ContactUs;