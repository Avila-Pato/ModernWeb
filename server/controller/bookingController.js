import Agency from "../models/Agency.js";
import Booking from "../models/Booking.js";
import Property from "../models/Property.js";

// Dispoonibilidad de la propiedad, en un rango de fechas
const checkAvailability = async ({ checkInDate, checkOutDate, property }) => {
    try {
        const bookings = await Booking.find({
            property, checkInDate: {$lte: checkOutDate}, checkOutDate: {$gte: checkInDate}
        })
        const isAvailable = bookings.length === 0
        return isAvailable
    } catch (error) {
        cosole.log(error)
    }
}


export const checkBookingAvailability = async (req, res) => {
    try {
        const {checkInDate, checkOutDate, property} = req.body
        const isAvailable = await checkAvailability({checkInDate, checkOutDate, property})
        res.json({success: true, isAvailable})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const bookingCreate =  async (req, res) => {
    try {
        const {checkInDate, checkOutDate, property, guests} = req.body
        const user = req.user._id

        const isAvailable =  await checkAvailability({checkInDate, checkOutDate, property})
        if(!isAvailable){
            return res.json({success: false, message: "La propiedad no esta disponible en ese rango de fechas"})
        }

        // Total price
        const propertyData = await Property.findById(property).populate("agency")
        let totalPrice = propertyData.price.rent

        // calcular el precio total basado en noches
        const checkIn = new Date(checkInDate)
        const checkOut = new Date(checkOutDate)
        const timeDiff = checkOut.getTime() - checkIn.getTime()
        const nights = Math.ceil(timeDiff / (1000 * 3600 * 24))

        totalPrice *= nights

        const booking = await Booking.create({
            user,
            property,
            agency: propertyData.agency._id,
            checkInDate,
            checkOutDate,
            totalPrice,
        })
        res.json({ success: true, message: "Reserva creada con exito"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: "Error al crear la reserva"})
    }
}

export const getUserBookings = async (req, res) => {
    try {
        const user = req.user._id
        const bookings = await Booking.find({user}).populate("property agency").sort({createdAt: -1})
        res.json({success: true, bookings})
        
    } catch (error) {
        res.json({success: false, message: "Error al obtener las reservas"})
    }
}

export const getAgencyBookings = async (req, res) => {
    try {
        const user = req.user._id
        const agency = await Agency.findOne({owner:  req.auth.userId})

        if(!agency){
            return res.json({success: false, message: "No tienes una agencia registrada"})
        }

        const bookings = await Booking.find({agency: agency._id}).populate("property agency user").sort({createdAt: -1})

        const totalBookings = bookings.length
        const totalRevenue = bookings.reduce((acc, b) => acc + (b.isPaid ? b.totalPrice : 0), 0)

        res.json({success: true, dashboard: {totalBookings, totalRevenue}, bookings})
    } catch (error) {
        res.json({success: false, message: "Error al obtener las reservas"})
    }
}