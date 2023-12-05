// GET all contacts
// route "/contacts"

const { ContactModel } = require("../model/Contact.model");

// access public
const getContacts = (req, res)=>{
    res.end("All the contacts");
 }

 // POST contact
// route "/contacts/create"
// access public
const createContact = async (req, res)=>{
    try {
        const {name, email, phone} = req.body;
        console.log(req.body);
        const contact = new ContactModel({name, email, phone});
        console.log(contact);
        await contact.save();
        res.send({"message" : "New contact has been added", "contact" : contact });
    } catch (error) {
        res.send({"message" : "Something went wrong", "error" : error.message});
    }
 }

 // GET the contact
// route "/contact/:id"
// access public
const getContact = async (req, res)=>{
    
    res.send(`Get the contact for ${req.params.id}`);
 }

 // UPDATE contact
// route "/contacts/update/:id"
// access public
const updateContact = (req, res)=>{
    res.end(`Update the contact for ${req.params.id}`);
 }

 // DELETE contact
// route "/contacts/delete/:id"
// access public
const deleteContact = (req, res)=>{
    res.end(`Delete the contact for ${req.params.id}`);
 }

 module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}
