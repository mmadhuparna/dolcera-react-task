import axios from "axios";


const posturl = 'https://jsonplaceholder.typicode.com/posts?userId='



const postsApi = {
    getposts: id =>{
        return axios.get(posturl + id);
    },

   
}



export default postsApi;