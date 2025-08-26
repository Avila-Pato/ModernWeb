import User from "../models/User.js"

export const authUser = async (req, res, next) => {
    //  Se obtiene el userId de la autenticación de Clerk
    const { userId } = req.auth()

    if(!userId) {
        // Si no se encuentra el userId en la autenticación de Clerk, se devuelve un error
        res.json({ success: false, message: "Unauthorized" })
    }else {
        // Busca en la base de datos al usuario correspondiente
        const user = await User.findById(userId)
        // adjunta el usuario al objecto para usarlo en las rutas
        req.user = user
        // Se pasa al siguiente middleware o controllador
        next()
    }
}