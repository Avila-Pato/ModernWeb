import express from "express";
import { authUser } from "../middleware/authMiddleware.js";
import { bookingCreate, checkBookingAvailability, getAgencyBookings, getUserBookings } from "../controller/bookingController.js";


const bookingRouter = express.Router();

bookingRouter.post("/check-availability", authUser, checkBookingAvailability)
bookingRouter.post("/book", authUser, bookingCreate)
bookingRouter.post("/user", authUser, getUserBookings)
bookingRouter.post("/agency", authUser, getAgencyBookings)


export default bookingRouter