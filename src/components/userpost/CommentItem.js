import React, { Component } from "react";
import { ListGroupItem, Button } from "react-bootstrap";


class CommentItem extends Component{
constructor(props){
  super(props)
}


viewComments = () => {
  const id = this.props.user.id
  this.props.history.push('/posts/'+ id)
}

    

    render(){

      const {comment}  = this.props;
return(
    <ListGroupItem>
    
    <h5>{comment.name}</h5>
    
    
    <p>{comment.body}</p>
    
  
    </ListGroupItem>
   
)

}
}
export default CommentItem;
