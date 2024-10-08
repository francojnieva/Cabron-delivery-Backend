const { Router } = require('express')
const {createProduct, getAllProducts, getOneProduct, deleteProduct, editProduct, addProductToCart, getDiscountProducts, getProductToCart, deleteProductInCart} = require('../controllers/product.controllers')
const upload = require('../middleware/multer')
const authUser = require('../middleware/auth.middleware')

const router = Router()

router.post('/api/producto', authUser('admin'), upload.single('imagen'), createProduct)
router.get('/api/productos', getAllProducts)
router.get('/api/producto', getOneProduct)
router.get('/api/productos-descuentos', getDiscountProducts)
router.put('/api/producto', authUser('admin'), upload.single('imagen'), editProduct)
router.delete('/api/producto', authUser('admin'), deleteProduct)

router.post('/api/carrito', addProductToCart)
router.get('/api/carrito', getProductToCart)
router.delete('/api/carrito', deleteProductInCart)

module.exports = router