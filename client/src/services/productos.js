import axios from "axios"

const apiproducto="/api/comida"

function productos() {
    try {
        return  axios.get(apiproducto)
        
        
    } catch (error) {
        
    }
    
}

export default productos