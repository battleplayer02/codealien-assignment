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
        user: 'hshekhar499@gmail.com',
        pass: 'Secured@ccount123',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

app.post('/mail', (req, res) => {
    const {to, subject, text } = req.body;
    const mailData = {
        from: 'shekhar.himanshu.02.02@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: text,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        return res.status(200).send({ message: "Mail send", message_id: info.messageId });

    });
    res.send({error:"error"})
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