export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request,response){
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta",
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
    }

    buscarHabitacionPorId(request,response){
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "Se encontro la habitacion encontrada",
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

    registrarHabitacion(request,response){
        try {
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
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "Exito editando el registro",
                "datos" : null,
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