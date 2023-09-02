import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'

const ListadoUsuarios = () => {
    const [usuarios, setUsuario] = useState([])
    useEffect(() => {
        const obtenerUsuarios = async () => {
            const { data } = await axios('http://localhost:3000/api/route/obtener-usuarios', { mode: 'cors' })
            if (data.length == 0) {
                return console.log('sin usuarios')
            }
            setUsuario(data)
        }
        obtenerUsuarios()
    }, [])


    return (
        <div>
            {usuarios.map(user => (
                <Item key={user._id} user={user} />
            ))}
        </div>
    )
}

export default ListadoUsuarios