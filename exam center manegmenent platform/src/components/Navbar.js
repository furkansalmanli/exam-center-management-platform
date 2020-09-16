import React, {Component} from  'react'
import { render } from '@testing-library/react'
import  {NavLink} from 'react-router-dom'

export class Navbar extends Component{

    render() {
   return (

<div>
<div>
                   {/* Üst tarafta bulunan menü çubuğu */}
<header>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" onclick="window.scrollTo(0,0);" data-toggle="collapse" data-target=".navbar-collapse.collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

              
              </div>
              <div className="navbar-collapse collapse">
                <div className="menu">
                  <ul className="nav nav-tabs" role="tablist">
                 
                    <div className="logo">
             
                    
                      <a href="/"><img src="img/Logo1.png"width= {72} height={72}    alt="Logo" /></a>
                    </div>
                
                  
                    <li role="presentation">  <NavLink className='active'to='/'> <h3><b>Ana Sayfa</b></h3> </NavLink></li> 
                    <li role="presentation">< NavLink to ='/about'><h3><b>Hakkımızda</b></h3></NavLink></li>  
                    <li role="presentation">< NavLink to ='/exams'><h3><b>Süreçler ve Sınavlar </b></h3></NavLink></li>                                                                                
                    <li role="presentation">< NavLink to ='/LoginScreen'><h3><b>Soru Havuzu</b></h3></NavLink></li> 
                    <li role="presentation">< NavLink to ='/LoginScreen1'><h3><b>Aday Takip</b></h3></NavLink></li>                 
                    <li role="presentation">< NavLink to ='/contact'><h3><b>İletişim</b></h3></NavLink></li>                                                                        
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>


</div>
       </div>
   )

    }

}

export default Navbar