import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div>
                <div className={`row m-0 p-0 chats py-2 keep-scrolling ${this.props.setactive}`} onClick={()=>{this.props.fetch(this.props.id,this.props.img)}}>
                    <div className="col-2 p-0">
                        <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                            <img className="img" src={`${this.props.img}`} alt="profile" />
                        </div>
                    </div>
                    <div className="col-10 text-start">                        
                        <h5 className="m-0">{this.props.name}</h5>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default List
