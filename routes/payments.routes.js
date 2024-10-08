const { Router } = require('express')
const upload = require('../middleware/multer')
const { createPayment } = require('../controllers/payments.controllers')

const router = Router()

router.post('/api/pago', upload.single('comprobante'), createPayment)

module.exports = router
