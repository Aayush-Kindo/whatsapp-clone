import React, { Component } from 'react'
import LeftComponent from './Components/LeftComponent'
import Register from './Components/Register'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       connect:'false',
       senderId:'',
       image:''
    }
  }
  
  retrieveData = (status,img,id) => {
    this.setState({connect:status,image:img,senderId:id})
    // console.log(id)
  }

  // ww=(stats)=>{
  //   this.setState({connect:stats})
  // }

  render() {
    return (
      <div className="m-0 p-0">
        {/* left component is the main */}
        {this.state.connect!=='false'?
                                        <LeftComponent connect={this.retrieveData} image={this.state.image} id={this.state.senderId}/> :
                                                          <Register connect={this.retrieveData}/>   
        }     
      </div>
    )
  }
}

export default App
