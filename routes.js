const express = require('express');
const router = express.Router();
const contactServiceController = require("./controllers/contactServiceController.js");
const messageServiceController = require("./controllers/messageServiceController");

router.get('/fetchAllContacts', contactServiceController.fetchAllContacts);
router.put('/sendMessage', messageServiceController.sendMessage);
router.get('/sentMessagesList', messageServiceController.fetchSentMessages)

module.exports = router;
