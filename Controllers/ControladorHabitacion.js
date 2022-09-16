export class ControladorHabitacion{

    constructor(){

    }

    //estos metodos llevaran la logica y respuesta 
    buscarHabitaciones(request,response){
        response.send("Estoy buscando habitaciones desde el controlador")
    }
    buscarHabitacionPorId(request,response){
        response.send("Estoy buscando una habitacion por id desde el controlador")

    }
    registrarHabitacion(request,response){
        response.send("Estoy registrando una habitacion desde el controlador")

    }
    editarHabitacion(request,response){
        response.send("Estoy editando una habitacion desde el controlador")

    }
}