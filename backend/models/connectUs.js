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
    message: {
        type: String,
        required: true,
        // minlength: 10
    },
    isAcknowledge:{
        type: Boolean,
        required: true
    },
    gender:{
        type: String,
        required: [true, 'Gender is required']
    }  
},
{
    "timestamps": true // Optional: adds createdAt and updatedAt timestamps
})

const ContactUs = mongoose.model('connectUs', contactUsSchema);

export default ContactUs;