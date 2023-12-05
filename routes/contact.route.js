const express = require('express');
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');

const contactRouter = express.Router();

contactRouter.get("/", getContacts);

contactRouter.get("/create", createContact);

contactRouter.get("/:id", getContact);

contactRouter.get("/update/:id", updateContact);

contactRouter.get("/delete/:id", deleteContact);

module.exports = contactRouter;