const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    phone : {type:String, required:true}
})

const ContactModel = mongoose.model("contact", contactSchema);

module.exports = {ContactModel};