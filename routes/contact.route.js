const express = require('express');
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');

const contactRouter = express.Router();

contactRouter.get("/", getContacts);

contactRouter.post("/create", createContact);

contactRouter.get("/:id", getContact);

contactRouter.put("/update/:id", updateContact);

contactRouter.delete("/delete/:id", deleteContact);

module.exports = contactRouter;