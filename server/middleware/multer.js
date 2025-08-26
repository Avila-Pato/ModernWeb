import multer from "multer";

export const upload = multer({ storage: multer.diskStorage({})})

// Cuando subas archivos con upload.array("images", 4) → Multer va a guardarlos en la carpeta uploads/ de tu proyecto.

