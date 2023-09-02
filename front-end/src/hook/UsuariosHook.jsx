import { useContext } from "react";
import UsuariosContext from "../context/UsuariosProvider";

const UsuariosHook = () => {
    return useContext(UsuariosContext)
}

export default UsuariosHook