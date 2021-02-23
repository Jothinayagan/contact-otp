const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
// const { Router } = require('express');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);
app.use(express.static(__dirname + "/contact-otp/dist/contact-otp"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact-otp/dist/contact-otp/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started and listening on http://localhost:${PORT}`);
});

module.exports = router;