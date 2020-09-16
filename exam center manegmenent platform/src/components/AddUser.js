import React, {Component} from 'react'
import UserConsumer from "../context";
import Users from './Users';
var uniqid =require('uniqid');
class AddUser extends  Component {
     state ={
        name  :"",
        exam :"",
        result:"",
        date :"",
        contact:""
     }

     changeInput = (e) => {
         this.setState({
             //name = "name"      bütün input değerlerini  almayı sağladık.
             [e.target.name] : e.target.value
         })
     }
     addUser = (dispatch,e) => {   //Gönderdiğimiz dispatch'i burada aldık.
         e.preventDefault();
         const {name,exam,result,date,contact} = this.state;

         const newUser ={
             id: uniqid(),
             name, // name:name,
             exam,//exam:exam,
             result,//result:result,
             date, //date:date,
             contact//contact:contact

         }
       //  console.log(newUser);    // consol da yeni kayıtları görebiliriz.
       dispatch({type : "ADD_USER",payload:newUser})

     }
     /*   Tek tek inputları almak yerine yukarda tek seferde hepsini aldık.
     changeName = (e) => {
    this.setState({
        name:e.target.value
    })
     }
     changeExam = (e) => {
        this.setState({
            exam:e.target.value
        })
    }
    changeResult = (e) => {
        this.setState({
            result:e.target.value
        })
    }
    changeContact = (e) => {
        this.setState({
            contact:e.target.value
        })
    }
    */
    render () {
        const {visible,name,exam,result,date,contact} = this.state;
         return <UserConsumer>
             {
                value => {                           //UserConsumer içinde kullanabilmek için dispatci dahil ettik.
                    const {dispatch} = value;        // onSubmit formunda addUser.bind(this,dispatch)  olarak kullandık.
                    return (
                        <div>
                    <div>  &nbsp;  </div> 
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                    <div>  &nbsp;  </div>
                  
                  
                  
                        <div className = "container">
                      <div className = "col-md-12 mb-4" >
                          <div className = "card" >
                          <div className = "card-header" style = {{backgroundColor : "#2d7da4"}}>
                          <center><h3 style = {{backgroundColor : "#2d7da4",color : "white"}}> <b> Aday Kayıt Formu </b></h3></center>
                          </div>
                          <div className=  "card-body">
                  
                    
                          <form onSubmit = {this.addUser.bind(this,dispatch)}> 
                                   <div className="form-group">
                                       <label htmlFor="name">Aday</label>
                                       <input
                                       tpye="text"
                                       name = "name"
                                       id = "name"
                                       placeholder="Aday adı ve soyadı giriniz"
                                       className ="form-control"
                                       value = {name}  // yeni girilen aday adını kaydettik.
                                       onChange = {this.changeInput}  // Ekrana yazı yazmayı aktif ettik.
                                       />
                  
                                   </div>
                  
                                   <div className="form-group">
                                       <label htmlFor="exam">Sınav</label>
                                       <input
                                       tpye="text"
                                       name = "exam"
                                       id = "exam"
                                       placeholder="Sınavın adını giriniz"
                                       class ="form-control"
                                       value = {exam} //yeni girilen sınav adını kaydettik.
                                       onChange = {this.changeInput} // Ekrana yazı yazmayı aktif ettik.
                                       />
                  
                                   </div>
                  
                                   <div className="form-group">
                                       <label htmlFor="result">Sonuç</label>
                                       <input
                                       tpye="text"
                                       name = "result"
                                       id = "result"
                                       placeholder="Sınav sonucunu giriniz   (Soru sayısı,Doğru ve Yanlış))"
                                       className ="form-control"
                                       value = {result} //yeni girilen sınav sonucunu  kaydettik.
                                       onChange = {this.changeInput} // Ekrana yazı yazmayı aktif ettik.
                                       />
                  
                                   </div>
                  
                                   <div className="form-group">
                                       <label htmlFor="contact">Belge Süresi</label>
                                       <input
                                       tpye="text"
                                       name = "date"
                                       id = "date"
                                       placeholder="Belgenin geçerli olduğu süre aralığını giriniz"
                                       className ="form-control"
                                       value = {date}  //yeni girilen belge süresini kaydettik.
                                       onChange = {this.changeInput}  // Ekrana yazı yazmayı aktif ettik.
                                       />
                  
                                   </div>
                  
                                   <div className="form-group">
                                       <label htmlFor="contact">İletişim</label>
                                       <input
                                       tpye="text"
                                       name = "contact"
                                       id = "contact"
                                       placeholder="Adayın telefon numarasını giriniz"
                                       className ="form-control"
                                       value = {contact}  //yeni girilen iletişim bilgini kaydettik.
                                       onChange = {this.changeInput}  // Ekrana yazı yazmayı aktif ettik.
                                       />
                  
                                   </div>
                  
                                   <div className = "container">
                                     <div className = "container">
                                       <div className = "container">
                                         <div className = "container">
                                           <div className = "container">
                                             <div className = "container">
                                               <div className = "container">
                                                 <div className = "col-md-9 mb-4" >
                                                    <button className ="btn btn-danger btn-block" tpye = "submit"> <h4><b>Aday Ekle </b></h4></button>
                                               </div>
                                              </div>
                                           </div>
                                         </div>
                                      </div>
                                    </div>
                                  </div>
                                 </div>
                                  
                              
                          </form>
                  
                         
                  
                          </div>
                         
                  
                        
                         </div>
                   </div> 
                   </div>
                   <Users/>
                   </div>
                   
                  )
                } 
             }

         </UserConsumer>
           


    }
}

export default AddUser;