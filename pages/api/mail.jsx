import { message } from 'antd'
import { notification } from 'antd';
import { TRUE } from 'node-sass';

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


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "gsgpm1018.siteground.biz",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.CUSTOMER_EMAIL, // generated ethereal user
            pass: process.env.CUSTOMER_PASSWORD, // generated ethereal password
        },
        // tls: {
        //     // do not fail on invalid certs
        //     rejectUnauthorized: false,
        // },
    });

    try {
        let info = await transporter.sendMail({
            from: `"Info" <${process.env.CUSTOMER_EMAIL}>`, // sender address
            to: "vinko@bluestonebuyersagents.com.au", // list of receivers
            subject: `New Consultation from ${body.email}`, // Subject line
            text: message, // plain text body
            html: message.replace(/\r\n/g, '<br>'), // html body
        });
        res.status(200).json({ status: "OK" })

    } catch (error) {
        res.status(400).json({ status: error })
    }

}