import nextConnect from 'next-connect';
import middleware from '~/lib/mongodb';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const user = await req.db.collection('user').findOne({email: req.body.email})
    
    if (user && bcrypt.compareSync(req.body.password, user.password)) { 
        const token = jwt.sign(
            {
                userId: user.id,
                userEmail: user.email
            },
            "bluestone",
            { expiresIn: '1d' }
        )

        return res.status(200).json({
            data: {
                userId: user._id,
                token: token,
                isActive: true
            },
            message: "Login successfully",
            status: 200,
            success: true,
        })
    } else {
        return res.status(400).json({ 
            message: 'Password is wrong!',
            status: 400,
            success: false,
        });
    }
})

export default handler