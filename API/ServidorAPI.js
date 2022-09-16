import express from 'express'
import {rutas} from '../Routes/rutas.js'
export class ServidorAPI{
    
    constructor(){
        this.app = express()    //ATRIBUTO DE UNA CLASE
        this.atenderPeticiones()

    }
    //METODOS DE LA CLASE 
    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Exito prendiendo-me el servidor: "+process.env.PORT);
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutas)
    }

    conectarConBD(){

    }
}