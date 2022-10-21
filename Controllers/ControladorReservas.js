import { ServicioReserva } from "../services/ServicioReserva.js";
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorReserva{

    constructor(){

    }

    //estos metodos llevaran la logica y respuesta 
    async buscarReservas(request,response){
        let objReserva = new ServicioReserva()
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta",
                "datos" : await objReserva.buscarReservas(),
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
        //response.send("Estoy buscando reservas desde el controlador")
    }
    async buscarReservasPorId(request,response){
        let id_rq = request.params.idReserva
        let objReserva = new ServicioReserva()
        console.log(id_rq);
        try {
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta "+id_rq,
                "datos" : await objReserva.buscarReservaPorId(id_rq),
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
        //response.send("Estoy buscando una reserva por id desde el controlador")

    }
    async registrarReserva(request,response){
        let datosReserva = request.body
        let objReserva = new ServicioReserva()
        let objServicioH = new ServicioHabitacion()

        //valor de la noche , numero maximo personas(calculo de ninos y adultos)
        //salida-entrada #dias x valornoche
        try {
            
            let datos_habitacion = await objServicioH.buscarHabitacionPorId(datosReserva.idHabitacion);
            let maxPerson = datos_habitacion.numeroMaximoPersonas
            let numeroPersonas = datosReserva.numeroNinos+datosReserva.numeroAdultos;
            let entrada = new Date(datosReserva.fechaEntrada);
            let salida = new Date(datosReserva.fechaSalida);
            const diffInDays = Math.floor((salida - entrada) / (1000 * 60 * 60 * 24));
            let costo = 0;
            if(diffInDays>0){
                //no programa ni el 300 ni el 500
                //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
                if(maxPerson>= numeroPersonas){
                    console.log(datos_habitacion.valorNoche,diffInDays)
                    costo = Number(datos_habitacion.valorNoche)*Number(diffInDays);
                    datosReserva.costoReserva = costo;
                    console.log(datosReserva);

                    await objReserva.agregarReserva(datosReserva)
                    response.status(200).json({
                        "mensaje" : "exito Agregando la reserva",
                        "datos" : datosReserva,
                        "estado" : true
                    })
                }else{
                    response.status(400).json({
                        "mensaje" : "No caben Tantos desparchao",
                        "datos" : null,
                        "estado" : true
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje" : "No mijo, quedese al menos un dia",
                    "datos" : null,
                    "estado" : true
                })

            }
           

            // await objReserva.agregarReserva(datosReserva)

            
        } catch (error) {
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            //response.send("estoy buscando habitaciones desde el controlador")
            response.status(400).json({
                "mensaje" : "Fallo en la consulta "+error,
                "datos" : null,
                "estado" : false
            })
        }
        //response.send("Estoy registrando una reserva desde el controlador")

    }
    async editarReserva(request,response){
        let id_rq = request.params.idReserva
        let datos_rq = request.body
        let objReserva = new ServicioReserva()
        /*
            // let objServicioH = new ServicioHabitacion()
            // let datos_habitacion = {};
            // let entrada,salida = "";
            // let numeroMaximoPersonas,costoHabitacion = 0;
            // let valFechas = "null";
            // let valPersonas = "null";
            // if (datos_rq.idHabitacion) {
            //     datos_habitacion = await objServicioH.buscarHabitacionPorId(datos_rq.idHabitacion);
            //     numeroMaximoPersonas = datos_habitacion.numeroMaximoPersonas;
            //     costoHabitacion = datos_habitacion.valorNoche;
            // }
            // let datos_reserva = await objReserva.buscarReservaPorId(id_rq);
            // if(datos_reserva){
            //     if(datos_rq.fechaEntrada && datos_rq.fechaSalida){
            //         const diffInDays = Math.floor((datos_rq.fechaSalida - datos_rq.fechaEntrada) / (1000 * 60 * 60 * 24));
            //         if(diffInDays > 0){
            //             valFechas = true;
            //         }else{
            //             valFechas = false;
            //         }
            //     }else if(datos_rq.fechaEntrada){
            //         const diffInDays = Math.floor((datos_habitacion.fechaSalida - datos_rq.fechaEntrada) / (1000 * 60 * 60 * 24));
            //         if(diffInDays > 0){
            //             valFechas = true;
            //         }else{
            //             valFechas = false;
            //         }
            //     }else if(datos_rq.fechaSalida){
            //         const diffInDays = Math.floor((datos_rq.fechaSalida - datos_habitacion.fechaEntrada) / (1000 * 60 * 60 * 24));
            //         if(diffInDays > 0){
            //             valFechas = true;
            //         }else{
            //             valFechas = false;
            //         }

            //     }

            //     if(datos_rq.numeroAdultos && datos_rq.numeroNinos){
            //         let numero_personas = Number(datos_rq.numeroAdultos)+Number(datos_rq.numeroNinos);
            //         if(numero_personas<=numeroMaximoPersonas){
            //             valPersonas = true;
            //         }else{
            //             valPersonas = false;
            //         }
            //     }else if(datos_rq.numeroAdultos){
            //         let numero_personas = Number(datos_rq.numeroAdultos)+Number(datos_reserva.numeroNinos);
            //         if(numero_personas<=numeroMaximoPersonas){
            //             valPersonas = true;
            //         }else{
            //             valPersonas = false;
            //         }
            //     }else if(datos_rq.numeroNinos){
            //         let numero_personas = Number(datos_reserva.numeroAdultos)+Number(datos_rq.numeroNinos);
            //         if(numero_personas<=numeroMaximoPersonas){
            //             valPersonas = true;
            //         }else{
            //             valPersonas = false;
            //         }

            //     }

            //     if(valFechas && valFechas != "null"){
            //         if(valPersonas && valPersonas != "null"){

            //         }else if(valPersonas != "null"){

            //         }else{

            //         }
            //     }else if(valPersonas && valPersonas != "null"){

            //     }

        */
            try {
                
                
                await objReserva.editarReserva(id_rq,datos_rq)
                //no programa ni el 300 ni el 500
                //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
                response.status(200).json({
                    "mensaje" : "exito en la consulta "+id_rq,
                    "datos" : datos_rq,
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
        
        //response.send("Estoy editando una reserva desde el controlador")

    }
    async borrarReserva(request,response){
        let id_rq = request.params.idReserva
        let objReserva = new ServicioReserva()
        console.log(id_rq);
        try {
            await objReserva.borrarReserva(id_rq);
            //no programa ni el 300 ni el 500
            //full comillas por que es un json y se pone en ambos lugares , aunque no es obligatorio
            response.status(200).json({
                "mensaje" : "exito en la consulta "+id_rq,
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
        //response.send("Estoy eliminando una reserva desde el controlador")

    }
}