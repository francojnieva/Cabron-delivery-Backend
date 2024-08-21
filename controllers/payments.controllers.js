const PaymentModel = require('../models/Payment.models')
const cloudinary = require('../services/cloudinary/cloudinary')
const templatesPayments = require('../services/nodemailer/templatesPayments')

const createPayment = async (req, res) => {
    try {
        const { address, id, username, email, totalToPay, order } = req.body
        if (!address) return res.status(400).json({ message: 'Todos los campos son obligatorios' })
        const dateOrder = new Date().toLocaleString()
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        const payment = new PaymentModel({ 
            address,
            image: secure_url,
            userId: id,
            username,
            userEmail: email,
            totalToPay,
            order: JSON.parse(order),
            dateOrder
        })
    
        await templatesPayments(payment)

        await payment.save()
        res.status(201).json({ message: 'Datos enviados' })
    } catch (error) {
        res.status(500).json({message: 'Error al enviar los datos'})
    }
}

module.exports = {
    createPayment
}