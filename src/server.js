require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    console.log("Received data:", { email, subject, message });

    let mailOptions = {
        from: email, 
        to: 'some.email@gmail.com', 
        subject: `Message from portfolio: ${subject}`, 
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ success: false, message: 'Failed to send email', error: error.toString() });
        }
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully', info: info.response });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
