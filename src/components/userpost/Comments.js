import React, { Component } from "react";
import commentApi from '../../api/comment';
import { Link } from "react-router-dom";
import { ListGroup, Button} from "react-bootstrap";
import CommentItem from "./CommentItem";


class Comments extends Component{
    constructor(props){
        super(props);

        this.state ={
            comments: []
           
        }
    }

    getcomment = id =>{
        commentApi.getcomments(id).then(res =>{       //api call 
            console.log(res);
             var result = res.data;
                         
                if(res !== null || res!== "") {
                    this.setState({
                        comments:res.data
                    })
                    
                }
                else {
                    console.log("error");
                    
                }
        })
    }

    componentDidMount(){
        
        const id = this.props.postid; //getting the value of id from props
        console.log(id)
        this.getcomment(id);
    }

    render(){
        const{comments}=this.state;
        return(
            
            <div>
               
            {comments ?
        <ListGroup>
                
        
            {comments.map(comment => (
                <CommentItem key={comment.id} comment = {comment} />
            )
                )}
                <p className="close"
   
                 onClick={this.props.remove}>close comments</p>
                 
        </ListGroup>
            
        : <h3>No Posts Available</h3>}
        </div>
        
        )
    }
}
export default Comments;