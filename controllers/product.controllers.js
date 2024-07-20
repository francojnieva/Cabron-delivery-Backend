const ProductsModel = require("../models/Product.models")
const cloudinary = require('../services/cloudinary/cloudinary')

const createProduct = async (req, res) => {
    try {
        const { name, description, price, discount } = req.body

        if (!name || !description || !price) return res.status(400).json({ message: 'Todos los campos son obligatorios' })

        const product = new ProductsModel({ 
            name, 
            description, 
            price,
            discount 
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

const createProductImage = async (req, res) => {
    try {
        const { id } = req.query
        const product = await ProductsModel.findById(id)
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        product.image = secure_url
        await product.save()
        
        res.status(200)

    } catch (error) {
        console.log(error)
        res.status(500)
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    deleteProduct,
    createProductImage
}
