import nextConnect from 'next-connect';
import middleware from '~/lib/mongodb';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    let data = req.body;
    data = JSON.parse(data);
    await req.db.collection('config').updateOne({name: 'services'}, {$set:data})

    return res.status(200).json({
        message: "OK",
        status: 200,
        success: true,
    })
})

handler.get(async (req, res) => {
    const services = await req.db.collection('config').findOne({name: 'services'})

    if (services) {
        return res.status(200).json({
            data: services,
            message: "OK",
            status: 200,
            success: true,
        })
    } else {
        return res.status(400).json({
            status: 400,
            success: false,
        })
    }
    
})


export default handler