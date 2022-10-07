import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){
        let objServicioH = new ServicioHabitacion()
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta",
                "datos" : await objServicioH.buscarHabitaciones(),
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
    }

    buscarHabitacionPorId(request,response){
        let id_rq= request.params.idHabitacion //recibo el id de la peticion
        // console.log("el id es: "+id_rq)
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "Se encontro la habitacion encontrada"+id_rq,
                "datos" : "Aqui van los datos de Habitaciones",
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("estoy buscando una habitacion por id desde el controlador")
    }

    async registrarHabitacion(request,response){
        let datosHabitacion = request.body;
        let objServicioH = new ServicioHabitacion();
        try {
            await objServicioH.agregarHabitacion(datosHabitacion);
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "Se registro correctamente",
                "datos" : null,
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo al registrar "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("estoy agregando desde el controlador")
    }

    editarHabitacion(request,response){
        let id_rq = request.params.idHabitacion
        let datosEdit = request.body
        console.log(id_rq, " ",datosEdit);
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "Exito editando el registro "+id_rq,
                "datos" : datosEdit,
                "estado" : true
            })
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("estoy editando desde el controlador")
    }


}