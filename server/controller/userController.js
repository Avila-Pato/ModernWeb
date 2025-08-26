export const getUserProfile = async (req, res) => {
    try {
        // Obtiene el rol del usuario desde rq.user
        const role = req.user.role
        // Obtiene las ciudades recientes buscadas
        const recentSearchedCities = req.user.recentSearchedCities
        // devuelve el rol y las ciudades
        res.json({success: true, role, recentSearchedCities})
    } catch (error) {
        res.json({ success: false, message: error.message })
        
    }
}

export const addRecentSearchedCity = async (req, res) => {
    try {
        const { recentSearchedCities } = req.body
        const user =  await req.user

        if(user.recentSearchedCities.length < 3){
            user.recentSearchedCities.push(recentSearchedCities)
        }else{
            user.recentSearchedCities.shift()
            user.recentSearchedCities.push(recentSearchedCities)
        }
        await user.save()

        res.json({success: true, message: "Ciudad agregada con exito" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}