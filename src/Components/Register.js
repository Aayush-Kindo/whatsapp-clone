import React, { Component } from 'react'
import List from './List'
import axios from 'axios'
import New from './New'
import '../Styles.css'

class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            users:[],
            userAdded:'false'
        }
    }

    isUserAdded=(status)=>{
        this.setState({userAdded:status})
    }

    async componentDidMount(){
        const fetchedPersons = await axios.get('/api/persons')
        console.log(fetchedPersons)
        this.setState({users: fetchedPersons.data})
    }

    get = (id,img) =>{
        this.setState(this.state.users.map(chat=>{
            return (
                chat.status='inactive'
            )
        }))
        this.setState(this.state.users.filter(chatt => chatt.id===id).map(chat=>{
            return (
                chat.status='active'
            )
        }))
        this.props.connect(true,img,id)
    }
    
    render() {

        let userList = this.state.users.map((user)=>{
            return(
                <List 
                    key={user._id}
                    id={user._id}
                    name={user.name}
                    img={user.img}
                    fetch={this.get} 
                    setactive={user.status}  
                />
            )
        })

        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <div style={{ width: '100%', height: '25%', backgroundColor: '#08bca4' }}>
                    <div className="row m-auto px-0 py-3 text-center" style={{ width: '80%', height: 'auto' }}>
                        <div className="col-1 m-auto p-3 h-100 text-end">
                            <img className="img" src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png" alt="logo" />
                        </div>
                        <div className="col-11 m-auto p-0 text-start text-white">
                            <b>WHATSAPP WEB CLONE</b>
                        </div>
                    </div>
                    {/* box */}
                    <div className="register-box">
                        <div className="row bg-dark text-center text-white" style={{ width: '90%', height: '90%', marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                            <div className="col-6 bg-warning">
                                <u><h1>REGISTER USER</h1></u>
                                {/* <form action="/" method="POST" class="needs-validation" novalidate>
                                    <div class="form-group mt-5">
                                        <input type="text" class="form-control" id="name" name="person[name]" aria-describedby="username" placeholder="Enter Username" required/>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="img" name="person[img]" placeholder="Enter url to your profile picture" required/>
                                    </div>
                                    <br />
                                    <button type="submit" class="btn btn-secondary" style={{ float: 'right' }}>Register</button>
                                </form> */}
                                <New status={this.isUserAdded}/>
                            </div>
                            <div className="col-6 bg-danger">
                                <u><h1>LOG IN VIA</h1></u>
                                <div className="card m-auto mt-5 keep-scrolling" style={{width: '90%',height:'50vh',overflow:'auto'}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {userList}
                                        </li>                                
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', height: '75%', backgroundColor: '#d8dcd4' }}>

                </div>
            </div>
        )
    }
}

export default Register
