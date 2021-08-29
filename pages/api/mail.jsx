import { message } from 'antd'
import { notification } from 'antd';

const nodemailer = require("nodemailer");
const modalNotification = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 3,
    });
};


export default async (req, res) => {
    const body = req.body
    const message = `
        First Name: ${body.firstname}\r\n
        Last Name: ${body.lastname}\r\n
        Email: ${body.email}\r\n
        Phone Number: ${body.phonenumber}\r\n
        Interesting: ${body.interested}\r\n
        Message: ${body.message}
    `
    let testAccount = await nodemailer.createTestAccount();
    console.log( process.env.CUSTOMER_EMAIL)
    console.log( process.env.CUSTOMER_PASSWORD)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "gsgpm1018.siteground.biz",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.CUSTOMER_EMAIL, // generated ethereal user
            pass: process.env.CUSTOMER_PASSWORD, // generated ethereal password
        },
    });
    console.log(transporter)
    try {
        let info = await transporter.sendMail({
            from: `"Vinko" <${process.env.CUSTOMER_EMAIL}>`, // sender address
            to: process.env.CUSTOMER_EMAIL, // list of receivers
            subject: `New Consultation from ${body.email}`, // Subject line
            text: message, // plain text body
            html: message.replace(/\r\n/g, '<br>'), // html body
        });
        res.status(200).json({ status: "OK" })
        
    } catch (error) {
        res.status(400).json({ status: error })
    }

}