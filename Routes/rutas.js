import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladorReservas.js'
let controladorReserva = new ControladorReserva()
let controladorHabitacion=new ControladorHabitacion() //usando el controlador

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion',controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hotelesnick/reservas',controladorReserva.buscarReservas)
rutasPersonalizadas.get('/hotelesnick/reserva/:id',controladorReserva.buscarReservasPorId)
rutasPersonalizadas.post('/hotelesnick/reserva', controladorReserva.registrarReserva)
rutasPersonalizadas.put('/hotelesnick/reserva', controladorReserva.editarReserva)
rutasPersonalizadas.delete('/hotelesnick/reserva/',controladorReserva.borrarReserva)