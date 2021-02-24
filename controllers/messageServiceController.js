const moment = require('moment');
const fs = require('fs');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSid, authToken);

module.exports.sendMessage = (req, res) => {
    twilioClient.messages.create({
        body: req.body.message,
        from: '+18329003236',
        to: req.body.phoneNumber
    }).then(message => {
        console.log("Message sent successfully! ", message.sid);
    });
    logSentMessage(req.body);
}

const logSentMessage = (body) => {
    let time = moment().format('DD/MM/YYYY, hh:mm:ss a');
    let data = {
        name: body.name,
        message: body.message,
        time: time
    };

    if (!fs.existsSync('./sentMessages.json')) {
        let preSentMessage = `{
            "sentMessages": []
        }`;
        fs.writeFileSync('./sentMessages.json', preSentMessage, 'utf8');
        logMessagetoJSON(data);
    } else
        logMessagetoJSON(data);
}

const logMessagetoJSON = (data) => {
    fs.readFile('./sentMessages.json', 'utf8', function readFileSync(err, body) {
        if (err)
            console.log(err);
        else {
            let parseJsonData = JSON.parse(body);
            parseJsonData.sentMessages.push(data);
            fs.writeFileSync('./sentMessages.json', JSON.stringify(parseJsonData), 'utf8', (err, res) => {
                if (err) console.log(err);
                else console.log("Log successful", res);
            });
        }
    });
}

module.exports.fetchSentMessages = (req, res) => {
    fs.readFile('./sentMessages.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            let sortMessage = JSON.parse(data).sentMessages.sort((a, b) => {
                return new Date(a.time) - new Date(b.time);
            });
            let orderedMessageList = sortMessage.reverse();
            res.send(orderedMessageList);
            return true;
        }
    });
}
