
import React,{Component, } from "react";
import axios from "axios";
const UserContext = React.createContext();    //uygulamada kullanacağımız bir context oluşturduk.

//Provider , Consumer     sağlayıcı ve tüketici sağlayacak. 
const reducer = (state,action) => {
    switch(action.type){     //switch case ile altta gönderdiğimiz action type'ı kontrol ediyoruz.
        case "DELETE_USER":
            return {
                ...state,   // eski state'i  spread operatör ile ayırdık.
                users: state.users.filter(user => action.payload !== user.id) // yeni users güncelledik.
            } // action payload ile user bilgilerimi kontrol ederiz. Id ler aynı değilsi silme işlemi yaparız.
            case"ADD_USER":
            return{
                ...state,  // eski state'i  spread operatör ile ayırdık.
                users : [...state.users,action.payload]
            } //      yeni objemizi array olarak users'a eşitledik.
            default : 
            return state
    }
}
export class UserProvider extends Component {
//index.js içinde UserProvider classı ile sarmallama  yapacağız. 


// Verilerimizi state' den çekmeye çalıştık.
state = {   //Burası boş olucak jsondan verilerimizi çekeceğiz.
    users: [],
    // güncellenmiş state alırız.  güncellenmemiş state ve actionu alıp güncel haline yerine yazıcaz.
    dispatch : action => {
        this.setState(state => reducer(state,action))  //switch case işleminden buraya yeni state durumumuz geliyor.
    }
}
//Json da post get işlemi yapabilmek için axiot kütüphanesini kullandık.
componentDidMount =async () => {
   const response = await axios.get("http://localhost:3000/users")
  this.setState({
      users: response.data   // verilerimizi response'dan gelen veriyle güncelledik.
  })
}
render(){
    return (
   // dispatch'imizi value olarak altta componentlarımıza geçiriyoruz.    

   <UserContext.Provider value = {this.state}>  

    {this.props.children}    {/*  <App/>  aynı görevi yapmasını sağladık childrenlarla */}
     
    </UserContext.Provider>
    )
}

}
 const UserConsumer = UserContext.Consumer;


 export default UserConsumer;
