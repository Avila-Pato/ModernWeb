import express from "express";
import { authUser } from "../middleware/authMiddleware.js";
import { addProperty } from "../controller/agencyController.js";

const agencyRouter = express.Router();

agencyRouter.post('/', authUser, addProperty)

export default agencyRouter