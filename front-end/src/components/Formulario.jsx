import axios from 'axios'
import UsuariosHook from '../hook/UsuariosHook'

import { useState } from "react"
import Alerta from './Alerta'
import ListadoUsuarios from './ListadoUsuarios'

const Formulario = () => {
    const { alerta, setAlerta } = UsuariosHook
    const [info, setInfo] = useState({ nombre: '', email: '', password: '' })

    const handleChange = e => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if ([info].includes('')) {
            setAlerta(true)
            setTimeout(() => setAlerta(false), 3000)
        }

        const { data } = await axios.post('http://localhost:3000/api/route/agregar-usuario', info, { mode: 'cors' })
        if (data.msg != '') {
            setInfo({ nombre: '', email: '', password: '' })
        }
    }

    return (
        <>
            {alerta ? <Alerta msg="¡Campos invalidos!" /> : ''}
            <form className="p-5" onSubmit={handleSubmit}>
                <div className="flex items-start mb-6">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Tu Nombre</label>
                    <input type="text" value={info.nombre} name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={e => handleChange(e)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Tu Email</label>
                    <input type="email" value={info.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" onChange={e => handleChange(e)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Tu Contraseña</label>
                    <input type="password" value={info.password} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={e => handleChange(e)} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Guardar</button>
            </form>
            <ListadoUsuarios />
        </>
    )
}

export default Formulario