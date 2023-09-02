import generarId from "../helpers/generarId.js";
import Usuario from "../models/usuarios.js"

const obtenerUsuarios = async (req, res) => {
    const { estado } = req.body
    try {
        const existeUsuario = await Usuario.find({ estado }, { nombre: 1, email: 1, estado: 1 })
        res.json(existeUsuario)
    } catch (error) {
        console.log(error)
    }
}

const buscarUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const existeUsuario = await Usuario.findById(id, { nombre: 1, email: 1 })
        if (!existeUsuario) {
            res.json({ msg: 'Este usuario no existe' })
        }
        res.json(existeUsuario)
    } catch (error) {
        console.log(error)
    }
}

const agregarUsuario = async (req, res) => {
    const { email } = req.body;
    try {
        const existeUsuario = await Usuario.findOne({ email })

        if (existeUsuario) {
            const error = new Error('Usario ya registrado')
            return res.status(400).json({ msg: error.message })
        }
    } catch (error) {
        console.log(error)
    }

    try {
        const usuario = new Usuario(req.body)
        usuario.token = generarId()
        await usuario.save()

        res.json({ msg: "Cuenta creada" });
    } catch (error) {
        console.log(error)
    }
}

const editarUsuario = async (req, res) => {
    const { id } = req.params

    const usuario = await Usuario.findById(id, { nombre: 1, email: 1 })

    if (!usuario) {
        const error = new Error("No se encontro el usuario!")
        return res.status(404).json({ msg: error.message })
    }

    usuario.nombre = req.body.nombre || usuario.nombre
    usuario.email = req.body.email || usuario.email

    try {
        const usuarioAlmacenado = await usuario.save()
        res.json(usuarioAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

const cambiarEstado = async (req, res) => {
    const { id } = req.params

    const usuario = await Usuario.findById(id, { nombre: 1, email: 1 })

    if (!usuario) {
        const error = new Error("No se encontro el usuario!")
        return res.status(404).json({ msg: error.message })
    }

    usuario.estado = req.body.estado || usuario.estado

    try {
        await usuario.save()
        res.json({ msg: "Usuario eliminado" })
    } catch (error) {
        console.log(error)
    }
}

export {
    obtenerUsuarios, agregarUsuario, editarUsuario, buscarUsuario, cambiarEstado
}