import React, {Compopnent, Component} from 'react'

 class Test extends Component {

constructor(props) {
    super(props);
    this.state  ({

      a:10
    })
     

    console.log("Contructor");

}
  componentDidMount(){
      console.log("componentDidMount");  
      // Api istekleri
      this.setState({
          a:20
      })
  }

 componentDidUpdate  = (prevProps,prevState) => {   // önceki durumlarımızı buradan kullanabiliyoruz.
  console.log("Component Did Update")
 }

 shouldComponentUpdate(){
     console.log("Should Component Update");
     return true;
 }
     render() {
        console.log("Render");
       
      return (

<div>


</div>
    
)


}


}

export default Test ;