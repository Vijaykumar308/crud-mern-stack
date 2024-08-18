import express from "express";
import connectDB from "./db/dbconn.js";

const app = express();
const PORT = 5000;
app.use(express.json()) 


app.get('/', (req, res) => {
    res.send('Hello world');
})

app.post('/create', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`App is running on port ${PORT}`);
})