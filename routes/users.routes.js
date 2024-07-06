const { Router } = require('express')
const { registerUser, getAllUsers, getOneUser, loginUser } = require('../controllers/users.controllers')
const router = Router()

router.post('/api/registro', registerUser)
router.post('/api/iniciar-sesion', loginUser)
router.get('/api/usuarios', getAllUsers )
router.get('/api/usuario', getOneUser )


module.exports = router