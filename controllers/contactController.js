// GET all contacts
// route "/contacts"
// access public
const getContacts = (req, res)=>{
    res.end("All the contacts");
 }

 // POST contact
// route "/contacts/create"
// access public
const createContact = (req, res)=>{
    res.end("Create the contact");
 }

 // GET the contact
// route "/contact/:id"
// access public
const getContact = (req, res)=>{
    res.end(`Get the contact for ${req.params.id}`);
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
