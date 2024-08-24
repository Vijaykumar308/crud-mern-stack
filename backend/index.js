import express from "express";
import connectDB from "./db/dbconn.js";
import ContactUs from "./models/connectUs.js";
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
    origin:"*"
}));
app.use(express.json()) 


app.get('/', (req, res) => {
    res.send('Hello world');
})

app.post('/create', async (req, res) => {
    const {name, email, message} = req.body;
    
    if(!name || !email || !message) {
        res.status(400).json("Invalid Json Body");
    }

    const item = new ContactUs(req.body);
    try {
        const isSave = await item.save();
        res.send(req.body);
    }
    catch (err) {
        res.send(err);
    }
})

app.listen(PORT, async () => {
    try{
        await connectDB();
    }
    catch(err) {console.log(err);}
    console.log(`App is running on port ${PORT}`);
})