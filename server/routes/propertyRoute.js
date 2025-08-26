import express from "express";
import { authUser } from "../middleware/authMiddleware";
import { createNewProperty, getAllAvailableProperties, getOwnerProperties, togglePropertyAvailability } from "../controller/propertyController";

const propertyRouter = express.Router();

propertyRouter.post("/", upload.array("images, 4"), authUser, createNewProperty )
propertyRouter.get("/", getAllAvailableProperties)
propertyRouter.get("/owner", getOwnerProperties)
propertyRouter.post("/toggle-availability", authUser, togglePropertyAvailability)