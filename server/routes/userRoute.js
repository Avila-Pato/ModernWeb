import express from "express";
import { authUser } from "../middleware/authMiddleware.js";
import { getUserProfile, addRecentSearchedCity } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get('/', authUser, getUserProfile)
userRouter.post('/store-recent-search', authUser, addRecentSearchedCity)

export default userRouter