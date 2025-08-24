import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());

app.use('/', (req, res) => {
    res.send('Hello from server');
});

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));