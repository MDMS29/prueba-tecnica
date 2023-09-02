import express from 'express'
import route from './routes/route.js'
import dotenv from 'dotenv'
import cors from 'cors'

import conectarDB from './database/db.js'

const app = express()

app.use(express.json())
dotenv.config()

const whiteList = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function (origin, callBack) {
        //Si el origin esta en la whiteList hacer:
        if (whiteList.includes(origin)) {
            //Consultar API
            callBack(null, true)
        } else {
            //No es permitido el request
            callBack(new Error("Error de Cors"))
        }
    }
}

// app.use(cors(corsOptions))

conectarDB()

app.use('/api/route', route);

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({ msg: `Puerto ${PORT}` })
})

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`)
})