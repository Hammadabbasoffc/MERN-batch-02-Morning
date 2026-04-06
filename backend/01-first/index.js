import express from 'express';

const app = express();

const PORT = 3000

app.get("/first", (req, res) => {
    res.send("Hello this is my first API")
})

app.listen(PORT, () => {
    console.log(`🌍 Server is Running on ${PORT}`);
})