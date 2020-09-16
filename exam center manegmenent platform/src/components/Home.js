import React, {Component} from 'react';
export class Home extends Component {
render()  {
return (
    <div>
      <div>

        
      
           <div>  &nbsp;  </div>
           <div>  &nbsp;  </div>
           <div>  &nbsp;  </div>
    

      {/* Başlık ve resim */} 
  <header className="masthead text-white text-center">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
        <p style={{fontWeight: 'bold', color: 'white', fontFamily:   'Helvetica Neue,sans-serif,Arial,Helvetica'}}> <b><h3><strong><i>KURS ATÖLYESİ MYK SINAV MERKEZİ YÖNETİMİ PLATFORMU</i></strong> </h3></b> </p>
        <div>  &nbsp;  </div>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0 ">
                <input type="email"   className="form-control form-control-lg" placeholder="Hızlı arama.." />
              </div>
              
              <div className="col-12 col-md-3 ">
             
               <button type="submit" className="btn btn-block btn-lg btn-primary">Arama yap!</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </header>
 
  
  {/* Girişteki ikonlar */}
  <section className="features-icons bg-light text-center">
    <div className="container">
    <div className="scroll" style={{overflowX: "hidden !important"}} />
   
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-primary" />
            </div> </div>
            <h3 className="course_title"><a href="https://www.myk.gov.tr/index.php/en/myk-meslek-yeterllk-belges-zorunluluu-sayfasi" target="_blank">MYK Belge Zorunluluğu </a></h3>
            <p className="lead mb-0"> İş Sağlığı ve Güvenliği Kanunu Değişikliğini İnceleyebilirsiniz.</p>
          
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-primary" />
            </div>
            <h3 className="course_title"><a href=" https://www.myk.gov.tr/index.php/tr/ulusal-yeterlilikler" target="_blank">MYK Ulusal Yeterlilikler </a></h3>
            <p className="lead mb-0"> Uluslararası Meslek Standartları Dokümanlarını İnceleyebilirsiniz.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-primary" />
            </div>
            <h3 className="course_title"><a href="https://www.turkiye.gov.tr/myk-hareketlilik-belgesi-dogrulama" target="_blank">MYK Belge Sorgulama </a></h3>
           
            <p className="lead mb-0">Mesleki Yeterlilik Belgesini Buradan Sorgulatabilirsiniz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Büyük resimler */}
  <section className="showcase">
    <div className="container-fluid ">
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("img/anasayfa1.png")'}} />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>MYK Mesleki Yeterlilik Belgesi Zorunlu Hale Getirildi</h2>
          <div>  &nbsp;  </div>
          <p className="lead mb-0">

             Mesleki Yeterlilik Kurumu Mesleki Yeterlilik Belgesi Zorunluluğu Getirilen Mesleklere İlişkin Tebliğ 25 Mayıs 2015 tarihli ve 29366 sayılı Resmi Gazete’de yayımlanarak yürürlüğe girmiştir.
             Bu kapsamda söz konusu tebliğ ekindeki listede belirtilen mesleklerde MYK Mesleki Yeterlilik Belgesi zorunlu hale getirilmiştir.
             İşbu Tebliğin yayım tarihinden itibaren on iki ay sonra MYK Mesleki Yeterlilik Belgesi olmayan kişiler bu mesleklerde çalıştırılamayacaktır.
            </p>
            <h3 className="lead mb-0"><a href="https://portal.myk.gov.tr/index.php?option=com_yeterlilik&amp;view=arama&amp;belge_zorunlu=1" target="_blank">Belge Zorunluluğu Kapsamındaki Meslekler İçin Tıklayınız.</a></h3>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url("img/anasayfa2.jpg")'}} />
        <div className="col-lg-6  my-auto showcase-text">
          <h2>MYK Belgesi Almak Neden Önemli</h2>
          <div>  &nbsp;  </div>
          <p className="lead mb-0"> Zorunluluk olmadığı alanlarda dahi, günümüzün iş hayatında bireylerin kendine bir kariyer sağlayabilmesi için bilgi, beceri ve deneyimlerini belgelemeleri istenmektedir.
             Sertifikasyonlar, tanımı belirlenmiş bir bilgi ve beceri düzeyi için gerekli tecrübe/birikimi ölçüp değerlendiren belgeleme standartlarıdır.
              Yeterli niteliğe sahip olmadığı halde, 'ben yaparım' diyen ve ortaya koyduğu düşük ücret ya da maaş ile, yeterli niteliği bertaraf etmeye çalışan kişilerle, nitelikli işgücünü ayırt etmek için bu gereklidir.  Ulusal yeterlilik sistemi orta ve uzun vadede işsizliğin azalması, istihdamın gelişmesi, verimlilik ve rekabet gücünün artmasıyla ülke ekonomisinin güçlenmesine katkı sağlar. Nitelikli ve belgeli işgücü istihdamının artması daha kaliteli ürün ve hizmet sunar.</p>
              <h3 className="lead mb-0"><a href=" https://www.myk.gov.tr/index.php/tr/meslek-yeterllk-belges/avantajlar-nelerdir" target="_blank">MYK Mesleki Yeterlilik Belgesinin Birey ve İşveren Avantajları İçin Tıklayınız.</a></h3>
             
      
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("img/anasayfa3.jpg")'}} />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>MYK Belgesi Nereden Alınmalı</h2>
          <div>  &nbsp;  </div>
          <p className="lead mb-0">Bireylerin MYK Mesleki Yeterlilik Belgesi alabilmeleri için belge almak istedikleri mesleğe ait ulusal yeterliliğin olması ve MYK tarafından bu ulusal yeterlilikte sınav ve belgelendirme yapmak üzere yetkilendirilmiş belgelendirme kuruluşunun bulunması gereklidir.</p>
 
         
          <h3 className="lead mb-0"><a href="https://portal.myk.gov.tr/index.php?option=com_belgeVerenKuruluslar" target="_blank">MYK Mesleki Yeterlilik Belgesi Nereden Alınır Tıklayınız.</a></h3>
          <h3 className="lead mb-0"><a href="  https://portal.myk.gov.tr/index.php?option=com_kurulus_ara&amp;view=kurulus_ara#&amp;Itemid=322a" target="_blank">Yetkilendirilmiş Belgelendirme Kuruluşları İçin Tıklayınız.</a></h3>
        </div>
      </div>
    </div>
  </section>
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


  {/* Alt resim */}
  <section className="call-to-action text-white text-center">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
        <p style={{fontWeight: 'bold', color: 'white', fontFamily:   'Helvetica Neue,sans-serif,Arial,Helvetica'}}> <b><h4><strong><i>KURS ATÖLYESİ MYK SINAV MERKEZİ YÖNETİMİ PLATFORMU</i></strong> </h4></b> </p>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" className="form-control form-control-lg" placeholder="Hızlı arama.." />
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-block btn-lg btn-primary" onclick="window.scrollTo(0,0);">Arama Yap!</button>
               
              </div>
            </div>
          </form>
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
        
         <center> <a href="http://www.dumlupinar.edu.tr/" target="_blank">Dumlupınar Üniversitesi </a></center>


       
  </div>
  </div>
    
  
  </footer>

</div>
</div>
)

}
}
export default Home