import React, { Component } from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import Comments from './Comments'




class Post extends Component{
constructor(props){
  super(props)

  this.state = {
    show: false
};
}


viewComments = () => {
  this.setState({
      show:true
  })
}

  remove = ()  =>{
    this.setState({
        show:false
    })
  }

    render(){

      const {post}  = this.props;
return(
    <ListGroupItem>
    
    <h3>{post.title}</h3>
    
    <p>{post.body}</p>
    
    
    
    <Button className="btn_style"
    variant="success" 
    onClick={this.viewComments}>
        View Comments</Button>
        {this.state.show ?
        <div>
    
    <Comments postid = {post.id} remove = {this.remove}/>
    </div>
    :''}
    </ListGroupItem>
   
)

}
}
export default Post;
