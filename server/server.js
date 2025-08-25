import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";


await connectDB()

const app = express();
app.use(cors());

app.use('/', (req, res) => {
    res.send('Hello from servereeeeeee');
});

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));