import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const authUser = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // buscar por _id = clerkId
    let user = await User.findById(userId);

    if (!user) {
      // Crear si no existe
      user = await User.create({
        _id: userId, // usamos el id de Clerk como _id en Mongo
        username: req.body?.username || "no-username",
        email: req.body?.email || "no-email",
        image: req.body?.image || "no-image",
        role: "user",
      });
    }

    req.user = user;
    
    console.log("🔑 HEADER TOKEN:", req.headers.authorization);
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
