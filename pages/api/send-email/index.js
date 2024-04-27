// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { email, subject, message } = req.body;

    console.log("Received data:", { email, subject, message });

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    let mailOptions = {
        from: email, 
        to: 'marc.camps.garreta@gmail.com', 
        subject: `Portfolio message from ${email}: ${subject}`, 
        text: message
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully', info: info.response });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.toString() });
    }
}
