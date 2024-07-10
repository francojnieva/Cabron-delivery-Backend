const jwt = require('jsonwebtoken')

const authUser = (req, res, next) => {
    const token = req.cookies.token

    if (!token) return res.status(403).json({ message: 'Acceso rechazado, token no proporcionado' })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) 
        if (decoded) return next()
        
    } catch (error) {
        return res.status(401).json({ message: 'Token no válido o expirado' })
    }
}

module.exports = authUser