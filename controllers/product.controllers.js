const ProductsModel = require("../models/Product.models")
const User = require("../models/User.models")
const cloudinary = require('../services/cloudinary/cloudinary')

const createProduct = async (req, res) => {
    try {
        const { name, description, price, discount } = req.body
        
        if (!name || !description || !price) return res.status(400).json({ message: 'Todos los campos son obligatorios' })
            
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
            
        const product = new ProductsModel({ 
            name, 
            description, 
            price,
            discount,
            image: secure_url
        })
        await product.save()
        res.status(201).json({ message: 'Producto agregado con éxito' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al agregar el producto' })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsModel.find()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al obtener los productos' })
    }
}

const getOneProduct = async (req, res) => {
    try {
        const { id } = req.query
        const product = await ProductsModel.findById(id)
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error al obtener el producto'})
    }
}

const getDiscountProducts = async (req, res) => {
    try {
        const products = await ProductsModel.find()
        const discountProducts = products.filter(product => product.discount >= 1)

        if (!discountProducts) {
           return res.json({message: 'No hay productos con descuentos'})
        }
        
        res.status(200).json(discountProducts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al obtener los productos con descuentos' })
    }
}

const editProduct = async (req, res) => {
    try {
        const { id } = req.query
        const { name, description, price, discount } = req.body

        if (!name || !description || !price) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' })
        }
        
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        const updatedData = { name, description, price, discount, image: secure_url }

        const editedProduct = await ProductsModel.findByIdAndUpdate(id, updatedData, {new: true})
        res.status(200).json({message: 'Producto editado con éxito', editedProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error al editar el producto'})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.query
        const product = await ProductsModel.findByIdAndDelete(id)

        if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    
        res.status(200).json({ message: 'Producto eliminado' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al borrar el producto' })
    }
}

const addProductToCart = async (req, res) => {
    try {
        const  { id } = req.query
        const  { userId } = req.body

        const user = await User.findById(userId)
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
        
        const product = await ProductsModel.findById(id)
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' })

        user.cart.push(product)
        await user.save()
        res.status(200).json({ message: 'Producto agregado al carrito' })
       
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error al agregar al carrito de compras'})
    }
}

const getProductToCart = async (req, res) => {
    try {
        const { userId } = req.query
        const user = await User.findById(userId)
        const productsCart = user.cart
        if (productsCart.length <= 0) {
            res.json({message: 'Carrito vacio'})
        } else {
            res.status(200).json(productsCart)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error al obtener los productos del carrito'})
    }
}

const deleteProductInCart = async (req, res) => {
    try {
        const { id, userId } = req.query
        const user = await User.findById(userId)
        const indexProduct = user.cart.findIndex(prod => prod._id.toString() === id)
        const deletedProduct = user.cart.splice(indexProduct,1)

        await user.save()
        res.status(200).json({message: 'Producto borrado'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error al borrar los productos del carrito'})
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    getDiscountProducts,
    editProduct,
    deleteProduct,
    addProductToCart,
    getProductToCart,
    deleteProductInCart
}
