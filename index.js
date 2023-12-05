const express = require("express");
const dotenv = require('dotenv').config();
const contactRouter = require("./routes/contact.route");
const { connection } = require("mongoose");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Home Page");
});

app.use("/contacts", contactRouter);

app.listen(port, async ()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err.message);
    }
    console.log(`Server is running at port ${port}`);
})