import express from 'express'
import { ControladorHabitacion} from '../Controllers/controladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladorReserva.js'

let controladorHabitacion = new ControladorHabitacion();//usando el controlador
let controladorReserva = new ControladorReserva();

export let rutas = express.Router()
rutas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/hotelesnick/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/hotelesnick/habitacion', controladorHabitacion.registrarHabitacion)
rutas.put('/hotelesnick/habitacion', controladorHabitacion.editarHabitacion)

rutas.get('/hotelesnick/reservas',controladorReserva.buscarReservas)
rutas.get('/hotelesnick/reserva/:id',controladorReserva.buscarReservasPorId)
rutas.post('/hotelesnick/reserva', controladorReserva.registrarReserva)
rutas.put('/hotelesnick/reserva', controladorReserva.editarReserva)
rutas.delete('/hotelesnick/reserva/',controladorReserva.borrarReserva)