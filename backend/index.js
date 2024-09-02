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

app.get('/index', async (req, res) => {
    const data = await ContactUs.find({});
    res.status(200).json({
        "status": 200,
        "data": data
    });
})

app.post('/create', async (req, res) => {
    const {name, email, message} = req.body;
    
    if(!name || !email || !message) {
        res.status(400).json("Invalid Json Body");
    }

    const item = new ContactUs(req.body);
    try {
        await item.save();
        res.send(req.body);
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/contact/:id', async(req,res) => {
    const record = await ContactUs.findById(req?.params?.id).select("-password");
    res.status(200).json({"status":200, "data": record});
});

app.put('/update/:id', async (req, res) => {
    const {name, email, message} = req.body;
    const id = req.params;
    console.log('id is:', id);
    
    if(!name || !email || !message) {
        res.status(400).json("Invalid Json Body");
    }
    
    try {
        const item = await ContactUs.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.delete('/delete/:id', async(req, res) => {
    const id = req.params.id;
    const result = await ContactUs.findByIdAndDelete(id);
    const remainsData = await ContactUs.find({});
    if(result) {
        res.status(200).json({
            'status':200,
            'message':"Item Deleted Successfully",
            'data':remainsData
        })
    }
    else {
        res.status(400).json({
            'status':400,
            'message':"Failed to Deleted Item"
        })
    }
})

app.listen(PORT, async () => {
    try {
        await connectDB();
    }
    catch(err) {console.log(err); }
    console.log(`App is running on port ${PORT}`);
})