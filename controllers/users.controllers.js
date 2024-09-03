const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.models');
const templatesRegister = require('../services/nodemailer/templatesRegister');

const registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body

        if (!username || !email || !password) return res.status(400).json({ message: 'Todos los campos son obligatorios' })

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) return res.status(400).json({ message: 'Correo electrónico inválido' })
       
        const emailExists = await User.findOne({ email })
        if (emailExists) return res.status(400).json({ message: 'Correo electrónico en uso' })
        
        const userNameExists = await User.findOne({ username })
        if (userNameExists) return res.status(400).json({ message: 'El nombre de usuario ya está en uso' })
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ 
            email, 
            username, 
            password: hashedPassword 
        })
        await newUser.save()

        await templatesRegister(email,username)

        res.status(201).json({ message: 'Usuario registrado con éxito' })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al registrar el usuario' })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!password || !email) return res.status(400).json({ message: 'Todos los campos son obligatorios' })

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' })

        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' })

        const token = jwt.sign({ id: user._id, email: user.email, name: user.username, rol: user.rol }, process.env.JWT_SECRET_KEY)
        
        res.status(200).json({ message: 'Inicio de sesión exitoso', token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al iniciar sesión' })
    }
}

const editUser = async (req, res) => {
    const { id } = req.query
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.findById(id)
    user.username = username
    user.email = email
    user.password = hashedPassword
    
    await user.save()
    res.status(200).json({ message: 'Usuario editado correctamente' })
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
       const rolUser = users.filter((user) => user.rol !== 'admin' )
        res.status(200).json(rolUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al obtener los usuarios' })
    }
}

const getOneUser = async (req, res) => {
    try {
        const { id } = req.query
        const user = await User.findById(id)

        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })

        res.status(200).json(user)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al obtener al usuario' })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.query
        const user = await User.findByIdAndDelete(id)

        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    
        res.status(200).json({ message: 'Usuario eliminado' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al borrar el usuario' })
    }
}


module.exports = {
    registerUser,
    loginUser,
    editUser,
    getAllUsers,
    getOneUser,
    deleteUser
}