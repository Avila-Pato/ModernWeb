import 'dotenv/config'; 
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import { clerkMiddleware } from '@clerk/express'


import clerkWebhooks from './controller/clerkWebhooks.js';

import userRouter from './routes/userRoute.js';
import agencyRouter from './routes/agencyRoutes.js';
import propertyRouter from './routes/propertyRoute.js';
import bookingRouter from './routes/bookingRoute.js';

import { requireAuth } from "@clerk/express";


await connectDB()
await connectCloudinary()

const app = express();
app.use(cors());
app.use(express.json());

// app.use(clerkMiddleware()) 
app.use('/api/clerk', clerkWebhooks)

app.use("/api/user", requireAuth(),  userRouter);
app.use("/api/agencies", agencyRouter);
app.use("/api/properties", propertyRouter);
app.use("/api/bookings", bookingRouter);


app.use('/', (req, res) => {
    res.send('Hello from servereeeeeee');
});

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));