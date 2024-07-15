const { Router } = require('express')
const { registerUser, getAllUsers, getOneUser, loginUser, deleteUser, auth } = require('../controllers/users.controllers')
const authUser = require('../middleware/auth.middleware')
const router = Router()

router.post('/api/registro', registerUser)
router.post('/api/iniciar-sesion', loginUser)
router.get('/api/usuarios', getAllUsers)
router.get('/api/usuario', getOneUser)
router.delete('/api/usuario', deleteUser)


module.exports = router