import React, { Component } from 'react'
import axios from 'axios'

class New extends Component {
    constructor(props) {
        super(props)
    
        this.state = {            
            name:'',
            img:'',            
            status:'inactive',
            success:'false'
        }
    }
    
    changeHandler = (e) =>{
        this.setState({ [e.target.name]:e.target.value })
    }

    submitHandler = async(e) => {
        e.preventDefault()
        await axios.post('/api/register', this.state)
        this.setState({name:'',img:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group mt-5">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter Username"
                            required
                            onChange={this.changeHandler}
                            value={this.state.name}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="img"
                            name="img"
                            placeholder="Enter url to your profile picture"
                            required
                            onChange={this.changeHandler}
                            value={this.state.img}
                        />
                    </div>
                    <br />
                    <button type="submit" onClick={()=>{this.props.status('true')}} className="btn btn-secondary" style={{ float: 'right' }}>Register</button>
                </form>
            </div>
        )
    }
}

export default New
