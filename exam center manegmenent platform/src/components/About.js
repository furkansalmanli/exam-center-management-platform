import React, { Component } from 'react'


export class About extends Component {

    render() {

    
     
       return (
        <div>
          
             {/* Büyük logo */}
             <section className="testimonials text-center bg-light">
                 <div className="container">
                  <p style={{fontWeight: 'bold', color: 'maroon', fontFamily: 'serif'}}> <b><h1><strong><i>LOGOMUZ</i></strong> </h1></b> </p>
                       <div>  &nbsp;  </div>
                       <div>  &nbsp;  </div>
                       <center><figure><img src="img/Logo1.png" alt="#" width= {350} height={350}/></figure></center>      
       </div>   
            </section>
       
              {/* Hizmetler */}
        <div className="sub-services">
          <div className="container">
            <div className="col-md-6">
              <div className="media">
                <ul>
                 
                    <div>  &nbsp;  </div>
                     <div>  &nbsp;  </div>
         
                    <div className="media-left">
                      <i className="fa fa-book" />
                    </div>
                    <div className="media-body">
                   
                    <b><h3 className="media-heading">İHTİYACA YÖNELİK</h3></b>
         <h3>  Belgelendirme merkezlerinin ihtiyaçlarını karşılamak ve sorunlarına çözüm bulmak amacıyla hizmete başladık.</h3>
                   </div>
                  
                     <div>  &nbsp;  </div>
                     <div>  &nbsp;  </div>
                  



                    <div className="media-left">
                      <i className="fa fa-rocket" />
                    </div>
                    <div className="media-body">
                      
                   <b><h3 className="media-heading">GÜNCEL TEKNOLOJİ</h3></b>  
         <h3><p>Microsoft.Net teknolojilerinini kullandık.Kullanıcı arayüzünü Facebook tarafından geliştirilmiş yeni ve güncel olan ReactJS ile geliştirdik.</p></h3>  
                   </div>
                  


                     <div>  &nbsp;  </div>
                     <div>  &nbsp;  </div>


                  
                    <div className="media-left">
                      <i className="fa fa-book" />
                    </div>                    
                    <div className="media-body">

                    <b><h3 className="media-heading">GELİŞTİRİLEBİLİR</h3></b>
         <h3><p>Yaptığımız çalışmaları daha iyi bir duruma getirebilmek için yeni fikirlere,değişime ve gelişime açık bir yapıya sahip olmayı planladık.</p></h3>
                    </div>



                     <div>  &nbsp;  </div>
                     <div>  &nbsp;  </div>


                  
                    <div className="media-left">
                      <i className="fa fa-rocket" />
                    </div>
                    <div className="media-body">

                    <b><h3 className="media-heading">KOLAY KULLANIM</h3></b>
         <h3><p>Sade,anlaşılır ve amaca yönelik site tasarımı ile kullanıcıya kolaylık sağlamayı hedefledik.</p></h3>
                    </div>
                   
                  
                </ul>
              </div>
            </div>
            <div className="col-md-6">
            
              <img src="img/projects_img.png" className="img-responsive" />
              <div>  &nbsp;  </div>
              <div>  &nbsp;  </div>
             
             
              
              <div className="media-left">
                      <i className="fa fa-book" />
                    </div>
                    <div className="media-body">

                    <b><h3 className="media-heading">YÖNETİLEBİLİR</h3></b>
         <h3><p>Adayların takibi, sınavların takibi, belgelerin takibi gibi süreçlerin yönetilmesi hedefledik. </p></h3>
                    </div>
              
              
             </div>
          
             </div>
             </div>

              {/* Görsel */}
              <div className="testimonials text-center bg-light">
              <div className="services">
              <div className="container">         
              <div class="col-md-6 offset-md-2">
              <div class="text-img">
              <div class="col-md-4">

                <center><figure><img src="img/box_img.png" alt="#"width= {700} height={400}/></figure></center>
                         
             </div>
             </div>
             </div>
                       <div class="row">
             </div>
             </div>   
            
              <div className="col-md-6">
              <div className="media">
               
              </div>
            </div>
          </div>
        </div>

          {/* Baloncuk */}
        <div class="container">
          <div class="row">
                      <div class="col-md-12">
                          <div class="projects_box ">
                                <div className="media-left">
                                  <i className="fa fa-rocket" />
                                </div>
                                <div className="media-body">

                                  <b><h3 className="media-heading">AÇIKLAYICI</h3></b>
                                  <h3><p>Yaptığımız işin özüne indik.
                                    Mesleki yeterlilik belgesi nedir,neden ihtiyaç duyulur,nereden elde edilir gibi soruların cevaplarını özetledik.
                                    MYK'nın aldığı kararlardan ve hizmet veren belgelendirme merkezlerinden kısaca bahsettik.
                                    Bunları yaparak genel olarak hangi kuruluşlara hangi amaçla hizmet ettiğimizi belirtmiş olduk. </p></h3>
                                </div>
                        </div>
                        </div>
            </div>
          </div>
            {/* Adres*/}
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
export default About