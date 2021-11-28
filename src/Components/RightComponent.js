import React, { Component } from 'react'
import '../Styles.css'
import axios from 'axios'
import { FormControl } from 'react-bootstrap'

class RightComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // msg:'',
            senderId:'',
            receiverId:'',
            messages:[]        
        }
        // this.state.messages = this.props.message 
    }

    async find(id){
        const fetchedMessages = await axios.get(`/api/fetchMessage/${id}`)
        this.setState({messages:fetchedMessages.data})
        // console.log(this.state.messages)
    }
    
    clickHandler=(e)=>{
        const sender = this.props.senderId
        const receiver = this.props.receiverId
        this.setState({[e.target.name]:e.target.value,senderId:sender,receiverId:receiver})
    }

    submitHandler=async(e)=>{
        if(e.keycode === 13 || e.which === 13)
        {
            e.preventDefault()
            // console.log(this.state)
            await axios.post('/api/message', this.state)
        }
        return
    }

    render() {
        return (//this is the top section            
            <div className="col-8 p-0 m-0">
                <div className="row m-0" style={{ height: '3rem', backgroundColor: '#EDEDED',borderLeft:'1px solid #ced4da' }}>
                    <div className="col-1 p-0 h-100">
                        <div className="w-100 p-0 text-center" style={{ width: '100%', height: '100%', display: 'inline-block' }}>
                            <img className="img m-0 p-1" src={`${this.props.image}`} alt="profile" />
                        </div>
                    </div>
                    <div className="col-9 p-0 h-100">
                        <h6 className="m-0 p-0 py-3">{this.props.namee}</h6>
                    </div>
                    <div className="col-1 h-100 p-2">
                        <div className="m-0 p-1 text-end" style={{ width: '100%', height: '100%', opacity: '0.3' }}>
                            <img className="img" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" alt="search" />
                        </div>
                    </div>
                    <div className="col-1 h-100">
                        <div className="text-start p-2" style={{ width: '100%', height: '100%', opacity: '0.6' }}>
                            <img className="img" src="https://cdn4.iconfinder.com/data/icons/145-basic-linea/24/More_Horizontal-256.png" alt="More" />
                        </div>
                    </div>
                </div>
                {/* this is the middle section */}
                {/* outer div for chats*/}
                <div className="bg-chat" style={{ height: '90%' }}>
                    {/* inner div for chats*/}
                    <div style={{ margin: '0% 10%' }}>
                        {/* day and date */}
                        <div className="mb-0 p-3 text-center ">
                            <div className="chat-box" style={{ backgroundColor: '#e1f3fb', display: 'inline-block', padding: '5px 10px' }}>SATURDAY</div>
                        </div>
                        {/* Message outer box*/}
                        <div className="" style={{height:'100%'}}>
                            {/* Message inner box */}
                            {/* <div className="" style={{ backgroundColor: 'white', display: 'inline-block', padding: '5px 10px' }}> */}
                            {/* use below div only for group chats else use 2nd div */}
                            {/* <div>
                                    <b className="text-success">+91 8305879860</b>&nbsp;&nbsp;~Me
                                </div> */}
                            {/* <div>
                                    This is the received message.
                                </div>
                            </div> */}

                            {/* Message inner box with chatbox arrow one for received message */}
                            {/* <div className="block">
                                <div class="talk-bubble triangle left-top mb-3">
                                    <div class="talktext">
                                        This is the received message.This is the received message.This is the received message.
                                    </div>
                                </div>
                            </div> */}
                            {/* break line */}
                            {/* <br/> */}
                            {/* ** */}

                            {/* Message inner box with chatbox arrow one for sent message */}
                            {/* received message */}
                            {this.props.receiverId !== '' ? this.find(this.props.receiverId) &&(
                                this.state.messages.filter(message => message.receiver_id === this.props.receiverId).map(m => {
                                    return (<div className="block">
                                        <div class="talk-bubble triangle left-top mb-3">
                                            <div class="talktext">
                                                {m.msg}
                                            </div>
                                        </div>
                                    </div>)
                                })
                                &&
                                this.state.messages.filter(message => message.sender_id === this.props.receiverId).map(m => {
                                    return (
                                        <div className="block pr-5 text-end">
                                        <div className="talk-bubble triangle right-top mb-3 sent-msg">
                                            <div className="talktext2">
                                                {/* This is the sent message.This is the sent message. */}
                                                {m.msg}
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }))
                                :<p></p>
                            }
                            {/* sent message */}
                            {/* {this.props.receiverId !== '' ? this.find(this.props.receiverId) &&
                                this.state.messages.filter(message=>message.sender_id === this.props.senderId).map(m  => {
                                    return (
                                        <div className="block pr-5 text-end">
                                            <div className="talk-bubble triangle right-top mb-3 sent-msg">
                                                <div className="talktext2">
                                                    This is the sent message.This is the sent message.
                                                    {m.msg}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <p></p>
                            } */}

                            {/* test */}

                            

                            {/* ***test*** */}
                            {/* <div className="block bg-danger pr-5 text-end">
                                <div className="talk-bubble triangle right-top mb-3 sent-msg" >
                                    <div className="talktext2">
                                        This is the sent message.This is the sent message.
                                        dasdsda
                                    </div>
                                </div>
                            </div>                            
                            <div className="block bg-danger pr-5 text-end">
                                <div className="talk-bubble triangle right-top mb-3 sent-msg" style={{ position: 'relative', float: 'right' }}>
                                    <div className="talktext2">
                                        This is the sent message.This is the sent message.
                                        dasdsda
                                    </div>
                                </div>
                            </div> */}
                            {/* ****test end**** */}
                            {/* ** */}

                        </div>
                    </div>
                </div>
                {/* this is the bottom section, write and send chat from here */}
                <div className="m-0 p-0"> 
                    <div className="row m-0" style={{ height: 'auto', backgroundColor: '#EDEDED'}}>
                        <div className="col-2 m-auto p-1 h-100">
                            {/* emoji  */}
                            <div className="w-50 p-0 text-end" style={{ width: '100%', height: '100%', display: 'inline-block' }}>
                                <img className="img m-0 p-2" src="https://cdn2.iconfinder.com/data/icons/emoji-39/1000/Smiley03-07-256.png" alt="emoji" />
                            </div>
                            {/* attach file */}
                            <div className="w-50 p-1 text-center" style={{ width: '100%', height: '100%', display: 'inline-block' }}>
                                <img className="img m-0 p-2" src="https://cdn-icons-png.flaticon.com/512/1578/1578895.png" alt="file" />
                            </div>
                        </div>
                        {/* write message */}
                        <div className="col-9 m-auto p-0 h-100">                        
                            <form>
                                <FormControl
                                    type="text"
                                    id="search-input2"
                                    name="msg"
                                    placeholder="Type a message"
                                    aria-label="SearchChat"
                                    aria-describedby="basic-addon1"
                                    onChange={this.clickHandler}
                                    onKeyPress={this.submitHandler}
                                />
                            </form>
                        </div>     
                        {/* voice message                */}
                        <div className="col-1 m-auto h-100">
                            <div className="text-start p-2" style={{ width: '100%', height: '100%', opacity: '0.6' }}>
                                <img className="img" src="https://cdn1.iconfinder.com/data/icons/hardware-cables-technologie/512/Artboard_12_copy_6-128.png" alt="voice" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightComponent
