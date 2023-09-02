import React from 'react'
import UsuariosHook from '../hook/UsuariosHook'

const Item = ({ user }) => {
    const { setUsuarioEditado } = UsuariosHook
    const { nombre, email } = user

    const handleEdit = () => {
        setUsuarioEditado({nombre, email})
    }

    return (
        <div className='w-100 rounded-md shadow mx-4 mt-5 p-4' onClick={handleEdit}>
            <p className='font-bold'>Nombre: <span className='font-normal'>{nombre}</span></p>
            <p className='font-bold'>Email: <span className='font-normal'>{email}</span></p>
        </div>
    )
}

export default Item