const { Router } = require('express')
const {createProduct, getAllProducts, getOneProduct, deleteProduct, createProductImage} = require('../controllers/product.controllers')
const upload = require('../middleware/multer')

const router = Router()

router.post('/api/producto', createProduct)
router.get('/api/productos', getAllProducts)
router.get('/api/producto', getOneProduct)
router.delete('/api/producto', deleteProduct)

router.post('/api/cargarImagen', upload.single('imagen'), createProductImage)



module.exports = router