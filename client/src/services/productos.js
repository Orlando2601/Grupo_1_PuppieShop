import axios from "axios"

const apiproducto="http://localhost:3030/api/comida/"

function productos() {
    try {
        return  axios.get(apiproducto)
        
        
    } catch (error) {
        
    }
    
}

  


export default productos