import { createContext, useState } from "react";


const UsuariosContext = createContext();

const UsuariosProvider = async ({ children }) => {
    const [alerta, setAlerta] = useState(false)
    const [userEditado, setUserEditado] = useState({ nombre: '', email: '' })

    return (
        <UsuariosContext.Provider
            value={{
                setAlerta, alerta,
                userEditado, setUserEditado
            }}>{children}</UsuariosContext.Provider>
    )
}

export {
    UsuariosProvider
}

export default UsuariosContext
