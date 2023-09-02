import express from "express"

import {
    agregarUsuario, buscarUsuario,
    editarUsuario, cambiarEstado, obtenerUsuarios
} from "../controller/routeController.js"

// import checkout from "../middleware/checkout.js"

const router = express.Router()

router.get('/obtener-usuarios', obtenerUsuarios)
router.post('/agregar-usuario', agregarUsuario)
router.get('/buscar-usuario/:id', buscarUsuario)
router.put('/editar-usuario/:id', editarUsuario)
router.put('/eliminar-usuario/:id', cambiarEstado)

export default router