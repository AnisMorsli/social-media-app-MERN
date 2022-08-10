// we need to import axios 
import axios from "axios"
// this url that the serveur is sending data to 
// in other to bring this data to the client we need to create a new fetch function 
const url = "http://localhost:3001/stories"

// this is the function : 
// export it so we can use it later on 
export const fetchStrories = () => axios.get(url)