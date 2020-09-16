import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import  Home from './components/Home';
import  Navbar from './components/Navbar';
import  About from './components/About';
import  Exams from './components/Exams';
import  Contact from './components/Contact';
import  Questions from './components/Questions';
import  User from './components/User';
import Users from './components/Users';
import AddUser from './components/AddUser';
import LoginScreen from  './components/LoginScreen';
import LoginScreen1 from  './components/LoginScreen1';
import Exam1 from  './components/Exam1';
import Exam2 from  './components/Exam2';
import Exam3 from  './components/Exam3';
import Exam4 from  './components/Exam4';
import Exam5 from  './components/Exam5';
import Exam6 from  './components/Exam6';

class App extends Component {

render(){
 
  return (      
                       
        <div>
        
       <Router>
           
       <Navbar/>
  
               <Route exact path= '/' component={Home} />
               <Route  path= '/about' component={About} />
               <Route  path= '/contact' component={Contact} />
               <Route  path= '/exams' component={Exams} />
               <Route  path= '/questions' component={Questions} />
               <Route  path= '/User' component={User}  />
               <Route  path= '/Users' component={Users} />
               <Route  path= '/AddUser' component={AddUser} />
               <Route  path= '/LoginScreen' component={LoginScreen} />
               <Route  path= '/LoginScreen1' component={LoginScreen1 } />
               <Route  path= '/Exam1' component={Exam1} />
               <Route  path= '/Exam2' component={Exam2} />
               <Route  path= '/Exam3' component={Exam3} />
               <Route  path= '/Exam4' component={Exam4} />
               <Route  path= '/Exam5' component={Exam5} />
               <Route  path= '/Exam6' component={Exam6} />
              
       </Router>
     
       </div>
  
  );

}
 



}
export default App;
