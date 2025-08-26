import User from  "../models/User.js"
import Agency from "../models/Agency.js"


export const agencyReg =  async (req, res) => {
    try {
        const {name, email, address, contact, city} = req.body
        const owner = req.user._id
        // chek si el usuario ya tiene una agencia registrada
        const agency = await Agency.findOne({owner})
        if(agency){
            return res.json({success: false, message: "El usuario ya tiene una agencia registrada"})
        }

        await Agency.create({name, email, address, contact, city })
        await User.findByIdAndUpdate(req.user._id, {role: "agencyOwner"})

        res.json({success: true, message: "Agencia creada con exito"})
    } catch (error) {
        res.json({success: false, message: error.message})
        
    }
}