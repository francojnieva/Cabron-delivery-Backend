const jwt = require('jsonwebtoken')

const authUser = (req, res, next) => {
    try {
        const token = req.header('auth')
        if (!token) return res.status(403).json({ message: 'Acceso rechazado, token no proporcionado' })
            
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (decoded) {
            next()
        } else {
            res.status(401).json({ message: 'Token no válido o expirado' })
        }
    } catch (error) {
        res.status(401).json({ message: 'Token no válido o expirado' })
    }
}

module.exports = authUser