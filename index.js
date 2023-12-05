const express = require("express");
const dotenv = require('dotenv').config();
const contactRouter = require("./routes/contact.route");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.end("Home Page");
});

app.use("/contacts", contactRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})