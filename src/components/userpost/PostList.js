import React, { Component } from "react";
import postsApi from '../../api/posts';
import { Link } from "react-router-dom";
import { ListGroup} from "react-bootstrap";
import Post from "./Post"

class PostList extends Component{
    constructor(props){
        super(props);

        this.state ={
            posts: []
           
        }
    }

    getpost = id =>{
        postsApi.getposts(id).then(res =>{       //api call 
            console.log(res);
             var result = res.data;
                         
                if(res !== null || res!== "") {
                    this.setState({
                        posts:res.data
                    })
                    
                }
                else {
                    console.log("error");
                    
                }
        })
    }

    componentDidMount(){
        
        const id = this.props.match.params.id; //getting the value of id from url parameter
        console.log(id)
        this.getpost(id);
    }

    render(){
        const{posts}=this.state;
        return(
            
            <div>
                <Link className=" linkto"  to = "/users">Home</Link>
                <hr/>
                <h2 className="text-center">POSTS</h2>
            {posts ?
            <ListGroup>
            {posts.map(post => (
                <Post key={post.id} post = {post} />
            )
                )}
        </ListGroup>
            
        : <h3>No Posts Available</h3>}
        </div>
        
        )
    }
}
export default PostList;