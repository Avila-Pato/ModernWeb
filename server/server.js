import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controller/clerkWebhooks.js';


await connectDB()

const app = express();
app.use(cors());

app.use(express.json());
app.use(clerkMiddleware())

app.use('/api/clerk', clerkWebhooks)

app.use('/', (req, res) => {
    res.send('Hello from servereeeeeee');
});

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));