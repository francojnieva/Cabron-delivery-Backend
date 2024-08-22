const jwt = require('jsonwebtoken')

const authUser = (rol) => (req, res, next) => {
    try {
        const token = req.header('auth')
        if (!token) return res.status(409).json({ message: 'Acceso rechazado, token no proporcionado' })
            
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (rol === decoded.rol) {
            next()
        } else {
            res.status(401).json({ message: 'Token no válido o expirado' })
        }
    } catch (error) {
        res.status(401).json({ message: 'Token no válido o expirado' })
    }
}

module.exports = authUser