import express from 'express'
const app = express();

app.use("/", (req, res) => {
    res.send("hello world")
})

app.listen(5000)