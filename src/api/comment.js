import axios from "axios";


const posturl = 'https://jsonplaceholder.typicode.com/comments?postId='



const commentApi = {
    getcomments: id =>{
        return axios.get(posturl + id);
    },

   
}



export default commentApi;