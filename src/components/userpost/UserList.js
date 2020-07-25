import React,{Component} from "react";
import { ListGroup} from "react-bootstrap";
import User from './user';
import usersApi from '../../api/user';
import '../../App.css'

 
class UserList extends Component{

    constructor(props){
        super(props)

        this.state ={
            users:[]
        }
    }

    componentDidMount(){
        this.getusers();
        
    }

    getusers(){
   
        usersApi.getusers().then(res => {//api call
            console.log(res);
            
            this.setState({
                users: res.data
            })
        })
    
    }
       
render(){
    console.log(this.state.users)
    
return (

    <div className="userlist">
        <h2 className="text-center">List Of Users</h2>
        
        
        <ListGroup>
            {this.state.users.map(user => (
                <User key={user.id} user = {user} />
            )
                )}
        </ListGroup>
    </div>
)

}
}
export default UserList;