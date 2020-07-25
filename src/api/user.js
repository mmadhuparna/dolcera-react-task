import axios from "axios"


const userurl = 'https://jsonplaceholder.typicode.com/users'



const usersApi = {
    getusers: () =>{
        return axios.get(userurl);
    },

   
}



export default usersApi;