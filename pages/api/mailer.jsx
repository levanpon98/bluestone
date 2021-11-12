import { message } from 'antd'
import { notification } from 'antd';
import { TRUE } from 'node-sass';
import SendGrid  from '~/lib/mail/sendGrid';
import nextConnect from 'next-connect';

const modalNotification = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 3,
    });
};

const handler = nextConnect();

handler.post(async (req, res) => {
    const mailService = new SendGrid();
    const body = JSON.parse(req.body)

    const message = `
        First Name: ${body.firstname}\r\n
        Last Name: ${body.lastname}\r\n
        Email: ${body.email}\r\n
        Phone Number: ${body.phonenumber}\r\n
        Interesting: ${body.interested}\r\n
        Message: ${body.message}
    `
    try {
        const result = await mailService
        .setReceiver('vinko@bluestonebuyersagents.com.au')
        .setSubject(`New Consultation from ${body.email}`)
        .setText(message)
        .setHtml(message.replace(/\r\n/g, '<br>'))
        .send();
        res.status(200).json({ status: "OK" })

    } catch (error) {
        res.status(400).json({ status: error })
    }

})

export default handler