import React, { Component } from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';



class User extends Component{
constructor(props){
  super(props)
}


viewPosts = () => {
  const id = this.props.user.id;
  this.props.history.push('/posts/'+ id)
}

    

    render(){

      const {user}  = this.props;
return(
    <ListGroupItem>
    <p>{user.id}</p>
        
    <h3>{user.name}</h3>
    <p><span className="heading">USERNAME: </span> <span> {user.username}</span></p>
    
    <p><span className="heading">EMAIL:</span> <span>{user.email}</span> </p>
    <p><span className="heading">PHONE:</span> <span> {user.phone}</span></p>
    
    <p><span className="heading">ADDRESS:</span> <span>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</span></p>
    
    <p><span className="heading">WEBSITE: </span> <span>{user.website}</span></p>
    <p><span className="heading">COMPANY: </span> <span>{user.company.name}</span></p>
    
    <Button 
    className="float-right" 
    variant="success" 
    onClick={this.viewPosts}>
        View Posts</Button>
    </ListGroupItem>
)

}
}
export default withRouter (User);
