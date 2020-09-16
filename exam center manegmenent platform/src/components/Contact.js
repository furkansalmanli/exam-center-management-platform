import React, {Component} from 'react'


export class Contact extends Component {

    render() {

     
       return(
       
      <div>
           <div>  &nbsp;  </div>
           <div>  &nbsp;  </div>
           <div>  &nbsp;  </div>

       {/* Görsel ve iletişim formu */}
      <section id="contact-page">
        
            <figure className="text-center"><img src="img/contact.jpg" alt="#"/></figure>
 
      <div className="container">
      <div className="center">
  <p style={{fontWeight: 'bold', color: 'maroon', fontFamily: 'Roboto Slab,serif'}}> <center><b><b><h1><strong><i>İLETİŞİM FORMU</i></strong> </h1></b></b></center> </p>       
 <p style={{fontWeight: 'bold', color: 'black', fontFamily:   'Helvetica Neue,sans-serif,Arial,Helvetica'}}> <center><b><h3><strong><i>Bilgi almak için bizimle iletişime geçebilirsiniz.</i></strong> </h3></b> </center></p>
        
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
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Konuyu belirtiniz." data-rule="minlen:4" data-msg="En az 8 karakter olacak şekilde giriniz." />
              <div className="validation" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Bizim için bir şeyler yazınız." placeholder="İletmek istediğiniz mesajı yazınız." defaultValue={""} />
              <div className="validation" />
             
         </div>
            
            <div className="text-center"><button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Mesaj Gönder</button></div>
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
  

    {/* Logolar */}
  <section className="testimonials text-center bg-light">
    <div className="container">
    <p style={{fontWeight: 'bold', color: 'maroon', fontFamily: 'serif'}}> <b><h1><strong><i>PROJE ORTAKLARI</i></strong> </h1></b> </p>
    <div>  &nbsp;  </div>
    <div>  &nbsp;  </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="img/Logo1.png" alt="" />
          
            <p style={{fontWeight: 'bold', color: 'black', fontFamily: 'serif'}}> <b><h2><strong><i>Kurs Atölyesi</i></strong> </h2></b> </p>

          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="img/Myk.jpg" alt="" />
            
            <p style={{fontWeight: 'bold', color: 'black', fontFamily: 'serif'}}> <b><h2><strong><i>Mesleki Yeterlilik Kurumu</i></strong> </h2></b> </p>
            
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="img/logo.png" alt="" />
            
            <p style={{fontWeight: 'bold', color: 'black', fontFamily: 'serif'}}> <b><h2><strong><i>Dumlupınar Üniversitesi</i></strong> </h2></b> </p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
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


       )
      

    }
}
export default Contact