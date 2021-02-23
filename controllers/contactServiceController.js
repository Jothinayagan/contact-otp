const { json } = require('body-parser');
const contactJSONList = require('../contactList.json');

exports.fetchAllContacts = (req, res) => {
    res.send(contactJSONList);
}