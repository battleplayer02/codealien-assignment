const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();

const port = process.env.PORT || 5000;





app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: '******',
        pass: '******',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

app.post('/mail', (req, res) => {
    const {to, subject, text } = req.body;
    const mailData = {
        from: 'hshekhar499@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});


app.post('/test',(req,res)=>{
    res.send("test")
})


app.get('/test',(req,res)=>{
    res.send("test")
})



app.use('/v1', route);


// Static files
app.use(express.static('public'));
