import React, {Component} from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context"

export class User extends Component {
  static defaultProps = {
    name : " Bilgi Yok",
    exam : " Bilgi Yok",
    result : "Bilgi Yok",
    date :   "Bilgi Yok",
    contact : "Bilgi Yok"


  }
    state = {
        isVisible : false
    }
//constructor(props){
  //  super(props);
    //this.state ={

      //  isVisible : false
    //}
// }


// bind fonksiyonu ile bu kısımda onclickeventimizi değer gönderdik.
 onClickEvent = (e) =>{
 
this.setState({
  isVisible  : !this.state.isVisible  
})

 }
 onDeleteUser = (dispatch,e) => {
  const{id} = this.props;  // id  değerimizi payload içinde gönderiyoruz.
   //Consumer Dispatch   kullanabilmemiz için action göndermemiz gerekiyor. Bu action'nun type'ı ve payloadu olması gerek.       
   dispatch({type : "DELETE_USER",payload:id});
 }
 componentWillUnmount(){   //componentlerimizi kaldırmadan önce bize bildirir. Abonelik varsa işe yarar.
     console.log("Component Will Unmount");
 }


    render() {
        const{name,exam,result,date,contact} =this.props;
        const {isVisible} = this.state; 
        return(
         <UserConsumer> 
           {
             value => {
                const {dispatch} = value;
              // const{name,exam,result,date,contact} =this.props;
               return(
       
                <div>
                             <div>  &nbsp;  </div>
                                 <div>  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
                             
                                 <div>  &nbsp;  </div>
                              
                                 <div>  &nbsp;  </div>
          
                    <div className ="container">
          <div className = "col-md-12 mb-4" style = {{backgroundColor : "#2d7da4"}}>
          <div className="card" style = {isVisible ? {backgroundColor : "#2d7da4",color : "white"} : null}>
                <div className = "card-header d-flex justify-content-between"> 
                   <h3 className = "d-inline " onClick = {this.onClickEvent}  >  <b>{name}</b></h3>
                       <i onClick = {this.onDeleteUser.bind(this,dispatch)} className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>
          
                </div>
                {
                     isVisible ?     <div className="card-body">
                  <h4>  <p className="card-text" >  <b>Sınav :</b> {exam}  </p> </h4>
                  <h4>      <p className="card-text"> <b> Sınav Sonucu :</b> {result}</p></h4>
                  <h4>      <p className="card-text"> <b> Belge Süresi :</b> {date} </p></h4>
                  <h4>   <p className="card-text"> <b> İletişim :</b> {contact} </p> </h4>
                   
                </div> : null
          
                }
                     
              
                </div>
          </div>
          </div>  
                     
                </div>
          
          
                 )
             }
           }
         </UserConsumer> )
  

    }
   
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  exam : PropTypes.string.isRequired,     //Hem rakam hem harf kullandığımız için string ürettirdik.
  result : PropTypes.string.isRequired,   //Hem rakam hem harf kullandığımız için string ürettirdik.
  contact : PropTypes.number.isRequired,  // Sadece tel numarası olduğu için number ürettirdik.
  date : PropTypes.string.isRequired,     //Hem rakam hem harf kullandığımız için string ürettirdik.
  id : PropTypes.string.isRequired        //uniq id string ürettiği için number yapamayız
 

}
export default User