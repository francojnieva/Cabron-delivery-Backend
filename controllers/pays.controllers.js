const PaymentModel = require('../models/Payment.models')
const cloudinary = require('../services/cloudinary/cloudinary')

const createPayment = async (req, res) => {
    try {
        const { address, id, username, email } = req.body
        if (!address) return res.status(400).json({ message: 'Todos los campos son obligatorios' })
        
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        const payment = new PaymentModel({ 
            address,
            image: secure_url,
            userId: id,
            username,
            userEmail: email,
        })
        await payment.save()
        res.status(201).json({ message: 'El pago se realizó con éxito' })
    } catch (error) {
        res.status(500).json({message: 'Error al pagar'})
    }
}

module.exports = {
    createPayment
}