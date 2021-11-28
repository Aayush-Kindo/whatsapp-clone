import React, { Component } from 'react'
import '../Styles.css'

class Chats extends Component {
    render() {
        return (
            <div>
                <div className={`row m-0 p-0 chats py-2 ${this.props.setactive}`} onClick={()=>{this.props.fetchId(this.props.id,this.props.name,true,this.props.img)}}>
                    <div className="col-2 p-0">
                        <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                            <img className="img" src={`${this.props.img}`} alt="profile" />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-9">
                                <h5 className="m-0">Name:{this.props.name}</h5>
                            </div>
                            <div className="col-3 text-end lighter">
                                <h6 className="m-0">11:15am</h6>
                            </div>
                        </div>
                        <div className="text-secondary">
                            <p className="m-0">Message : {this.props.msg}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chats
