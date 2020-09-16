import react from 'react';
import React, {Component} from  'react'
import { BrowserRouter,Switch,Route} from  'react-router-dom';
//import  Questions from './components/Questions';

export class LoginScreen extends Component  {
  
   constructor(){
      super();
      this.state = {

      }
   }
 

   loginScreen(e){
      e.preventDefault();
      
       var user =e.target.elements.user.value;
       var password =e.target.elements.password.value;
       if(user =='furkan' && password =='123') {
       //  alert('Soru Havuzu Sayfasına Hoşgeldiniz.');
          this.props.history.push('/questions');


       } else {
          this.setState({
             err:'Geçersiz Kullanıcı'
          })
       }


     
   }
render(){
   let format ={
      color:"red"
   };
return(
   
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
                                 <div>  &nbsp;  </div>


                                
<div className="row">
    
     
    <div className="col-lg-6 col-md-8 mx-auto">
      {/*Soru Havuzu Sayfası Giriş Formu */}
      <div className="card rounded shadow shadow-sm">
        <div className="card-header" style = {{backgroundColor : "#2d7da4"}}>
        <center> <h3 style = {{backgroundColor : "#2d7da4",color : "white"}} className="mb-0"><b>Soru Havuzu Sayfası Giriş Formu</b></h3></center> 
         
        </div>
        <div className="card-body">
        
      
         <form method="post" onSubmit={this.loginScreen.bind(this)}>

             <div className="form-group">
              <label htmlFor="uname1">Kullanıcı adı</label>
              <input type="text" className="form-control form-control-lg rounded-0" name="user" id="usr1" required />
              <div className="invalid-feedback">Lütfen bu alanı doldurun</div>
            </div>
            <div className="form-group">
              <label>Şifre</label>
              <input type="password" className="form-control form-control-lg rounded-0"name="password" id="pwd1" required autoComplete="new-password" />
              <div className="invalid-feedback">Şifre giriniz</div>
            </div>
         
            <div className = "col-md-7 mb-4" >
            <span style={format}>{this.state.err !='' ? this.state.err : ''}</span> 
           <center><button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Giriş Yap</button></center> 
           </div>
          
          
          </form>
        </div>
      
      </div>
   
    </div>
</div>

<div>
         

       {/* Görsel ve iletişim formu */}
      <section id="contact-page">
        
      <div>  &nbsp;  </div>
                                 <div>  &nbsp;  </div>
                              
                                 <div>  &nbsp;  </div>
 
      <div className="container">
      <div className="center">
    
 <p style={{fontWeight: 'bold', color: 'black', fontFamily:   'Helvetica Neue,sans-serif,Arial,Helvetica'}}> <center><b><h4><strong><i>Kullanıcı adı ve şifre almak için bizimle iletişime geçebilirsiniz.</i></strong> </h4></b> </center></p>
        
      </div>


      <div className="row contact-wrap">
      <div className="status alert alert-success" style={{display: 'none'}} />
      <div className="col-md-6 col-md-offset-3">
        
       

          <div id="errormessage" />
          <form action method="post" role="form" className="contactForm">
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Adınız ve soyadınızı giriniz." data-rule="minlen:4" data-msg="En az 4 karakter olmalıdır." />
              <div className="validation" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder=" E-mail adresinizi giriniz. " data-rule="email" data-msg="Geçerli bir mail adresi giriniz." />
              <div className="validation" />
            </div>
           
            
            <div className="text-center"><button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Gönder</button></div>
            <div>  &nbsp;  </div>
            <div>  &nbsp;  </div>
           
           
         </form>
    </div>
    </div>
    </div> 
      
   {/* Google map */}
  </section>
  <div className="map">    
    <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.482196197984!2d29.895577315753798!3d39.48102511993456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c9486d6b77991d%3A0xa51a8d9c8451df0e!2sK%C3%BCtahya%20Dumlup%C4%B1nar%20%C3%9Cniversitesi%20M%C3%BChendislik%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1587820739947!5m2!1str!2str" width= {1840} height={490}/></center>
  </div>
  


     {/* Adres */}
  <footer className="footer bg-light">
    
        <div className="col-md-4 col-md-offset-4">
        <div className="footer bg-light">
        <center>  <p><b>Telefon:</b> (0274) 265 20 31</p></center>
         
        <center><b> Adres : </b>Andız Mahallesi Tavşanlı Yolu 10. km Dumlupınar Üniversitesi Merkez Kampüs Merkez, 43000 Kütahya Merkez</center> 
        
        <center> <a href="http://www.dumlupinar.edu.tr/" target="_blank">Dumlupınar Üniversitesi </a></center></div> 
       </div>

  </footer>
</div>



 </div>

);

}

}

export default LoginScreen 


