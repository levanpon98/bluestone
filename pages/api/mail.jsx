import { message } from 'antd'
import { notification } from 'antd';

const modalNotification = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 3,
    });
};

const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
    const body = JSON.parse(req.body)

    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `
    
    const data = {
        to: body.email,
        from: process.env.CUSTOMER_EMAIL,
        cc: process.env.CUSTOMER_EMAIL,
        subject: body.subject,
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }

    try {
        await mail.send(data)
        res.status(200).json({ status: "OK" })
    } catch (error) {
        res.status(400).json({ status: "Error" })
    }
    
}