import React, {Component} from 'react'
import  User from "./User";
import UserConsumer from "../context";

 class Users extends Component {
render() { 
    const {users} = this.props;
    return (
     //context dosyamızdan UserConsumer sayesinde users bilgilerimizi çektik.
      <UserConsumer>
    {
        value => {
          const {users} = value;
    return (
    <div>
        {
    users.map(user => {
        return(
            <User
             key ={user.id}  // uniqie key veririz aynı olmaması için
             id = {user.id}
             name = {user.name}         
             exam = {user.exam}
             result ={user.result}
             date ={user.date}
             contact ={user.contact}
            
            />
               )

                      })
        }
  </div>
          )


                }
    }
    </UserConsumer>

)






  //  const{users}  = this.props;
    //console.log(users);

}

}
export default Users




