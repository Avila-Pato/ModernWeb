import {v2 as cloudinary} from "cloudinary"
import Agency from "../models/Agency.js"
import Property from "../models/Property.js"
import { populate } from "dotenv"


export const createNewProperty =  async (req, res) => {
    try {
        const {
            title,
            description,
            city,
            country,
            address,
            area,
            propertyType,
            priceRent,
            priceSale,
            bedrooms,
            bathrooms,
            garages,
            amenities,
        } = req.body

        const agency = await Agency.findOne({owner: req.auth.userId})

        if (!agency) {
            return res.json({success: false, message: "No tienes una agencia registrada"})
        }
        //  Subir imagen a cloudinary
        const uploadImages = req.files.map(async (file) => {
            const result = await cloudinary.uploader.upload(file.path)
            return result.secure_url
        })
        // esperando para que se suban todas las imagenes
        const images = await Promise.all(uploadImages)

        await Property.create({
            agency: agency._id,
            title,
            description,
            city,
            country,
            address,
            area,
            propertyType,
            price: {
                rent: priceRent ? +priceRent : null,
                sale: priceSale ? +priceSale : null
            },
            facilities: {
                bedrooms: +bedrooms,
                bathrooms:  +bathrooms,
                garages: +garages
            },
            amenities: JSON.parse(amenities),
            images,
        })
        res.json({success: true, message: "Propiedad creada con exito"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// obtener todos las propeidaes disponibles
export const getAllAvailableProperties = async (req, res) => {
    try {
        const properties = await Property.find({ isAvailable: true }).populate({
            path: "agency",
            populate: {
                path: "owner",
                select: "image email"
            },
        });

        res.json({success: true, properties})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

 // obtener propeidades por registro
export const getOwnerProperties = async (req, res) => {
    try {
        const agencyData = await Agency.findOne({owner: req.auth.userId})
        const properties = await Property.find({
            agency: agencyData._id.toString(),
        }).populate("agency")
    } catch (error) {
        res.json({success: false, message: error.message})
        
    }
}

// alternnar status de disponibiliodad de las propiedades
export const togglePropertyAvailability = async (req, res) => {
    try {
        const {propertyId} = req.body
        const propertyData = await Property.findById(propertyId)
        propertyData.isAvailable = !propertyData.isAvailable
        await propertyData.save()

        res.json({success: true, message: "Propiedad actualizada con exito"})
    } catch (error) {
        res.json({success: false, message: error.message})  
    }
}
