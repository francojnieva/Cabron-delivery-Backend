const { Router } = require('express')
const { registerUser, getAllUsers, getOneUser, loginUser, deleteUser, editUser } = require('../controllers/users.controllers')
const authUser = require('../middleware/auth.middleware')
const router = Router()

router.post('/api/registro', registerUser)
router.post('/api/iniciar-sesion', loginUser)
router.put('/api/editar-usuario', authUser, editUser)
router.get('/api/usuarios', authUser, getAllUsers)
router.get('/api/usuario', authUser, getOneUser)
router.delete('/api/usuario', authUser, deleteUser)


module.exports = router