export class ControladorReserva{

    constructor(){

    }

    //estos metodos llevaran la logica y respuesta 
    buscarReservas(request,response){
        response.send("Estoy buscando reservas desde el controlador")
    }
    buscarReservasPorId(request,response){
        response.send("Estoy buscando una reserva por id desde el controlador")

    }
    registrarReserva(request,response){
        response.send("Estoy registrando una reserva desde el controlador")

    }
    editarReserva(request,response){
        response.send("Estoy editando una reserva desde el controlador")

    }
    borrarReserva(request,response){
        response.send("Estoy eliminando una reserva desde el controlador")

    }
}