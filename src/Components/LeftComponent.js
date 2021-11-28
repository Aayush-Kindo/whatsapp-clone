import React, { Component } from 'react'
import '../Styles.css'
import { InputGroup, FormControl } from 'react-bootstrap'
import Chats from './Chats'
import RightComponent from './RightComponent'
import axios from 'axios'
import backgroundImage from '../images/Screenshot (51).png'

class LeftComponent extends Component {

    constructor(props) {
        super()
        this.state = {
            persons: [],
            initial: false,
            name: '',
            image: '',
            // message: '',
            receiver:'',
            senderId:props.id,
            messages:[]   
        }
    }

    async componentDidMount() {
        const fetchedPersons = await axios.get('/api/persons')
        console.log(fetchedPersons.data)
        this.setState({ persons: fetchedPersons.data })
    }

    getId = async(id, chatname, firstPage, img) => {
        // alert("changed")
        // this.setState({openChat:status,cid:chatid})
        // initial is the first page which loads, default set to true, but when clicked on chat
        // initial sets to false
        this.setState({ name: chatname, initial: firstPage, receiver: id, image: img })
        // console.log('receiverId :' + this.state.receiverId)
        // console.log('senderId :' + this.state.senderId)
        // const fetchedMessages = await axios.get(`/fetchMessage/${id}`)
        // this.setState({messages:fetchedMessages})
        // console.log(fetchedMessages)
        // this.setState({messages:fetchedMessages.data})
        // console.log(this.state.messages)
        
        this.setState(this.state.persons.map(chat => {
            return chat.status = 'inactive'
        }))
        this.setState(this.state.persons.filter(chatt => chatt._id === id).map(chat => {
            return chat.status = 'active'
        }))
        // this.setState(this.state.persons.filter((chat) =>{

        //    return (chat !== chat[id])
        // })) 
        // const persons = this.state.persons[id]
        // this.setState(persons[id].status:'active')
        // this.state.persons[id].className="active"
        // alert(chatid + ' and ' + chatname)
        // return ( <RightComponent name={chatname}/> )
    }

    render() {
        //this is the list of persons the chat happened with
        let personsList = this.state.persons.filter(chatt=>chatt._id !== this.props.id).map(chat => {
            
            return (
                <Chats
                    key={chat._id}
                    id={chat._id}
                    img={chat.img}
                    name={chat.name}
                    // msg={chat.messages[0].msg}
                    fetchId={this.getId}
                    setactive={chat.status}
                />
            )
        })

        return (
            // left component of whatsapp web app width is 26 rem
            <div className="row m-0 p-0">
                {/* top section */}
                <div className="col-4 p-0 m-0" style={{ height: '100%' }}>
                    <div className="m-0 py-2 row" style={{ height: '3rem', backgroundColor: '#EDEDED' }}>
                        <div className="col-6 p-0">
                            <div className="w-25 p-0 pt-1 text-end" style={{ width: '100%', height: '100%' }}>
                                {/* <img className="img" src="https://image.flaticon.com/icons/png/512/1177/1177568.png" alt="profile" /> */}
                                <img className="img" src={`${this.props.image}`} alt="profile" />
                            </div>
                        </div>

                        <div className="col-2 text-end">
                            <div className="text-end p-2" style={{ width: '100%', height: '100%' }}>
                                <img className="img" src="https://cdn2.iconfinder.com/data/icons/ui-chat-app-1/32/24-status-update-256.png" alt="Status" />
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="text-end p-2" style={{ width: '100%', height: '100%' }}>
                                <img className="img" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/chat-conversation-message-talk-256.png" alt="Message" />
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="" style={{ width: '100%', height: '100%' }}>                                
                                <div className="dropdown">
                                    <img className="img pt-1 dropbtn" src="https://cdn4.iconfinder.com/data/icons/145-basic-linea/24/More_Horizontal-256.png" alt="More" />

                                    <div className="dropdown-content">
                                        <ul className="m-auto p-2" onClick={()=>{this.props.connect('false')}}>
                                            <li >Log out</li>
                                        </ul>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>

                    {/* search section */}
                    <div style={{ backgroundColor: '#EDEDED' }}>                        
                        <InputGroup className="p-3" style={{ border: '1 px solid red' }}>
                            <InputGroup.Text id="search-icon">
                                <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" alt="search" />
                            </InputGroup.Text>
                            <FormControl
                                id="search-input"
                                placeholder="Search or start new chat"
                                aria-label="SearchChat"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>

                    {/* bottom section */}
                    {/* Displaying personsList of people with whom recently chat happened */}
                    <div className="bg-white container keep-scrolling m-0 p-0" style={{ height: '75vh', overflow: 'auto' }}>
                        {personsList}
                    </div>

                </div>

                {/* right section */}
                {/* Right component */}
                {this.state.initial === false ?
                    <div className="col-8 p-0 m-0">
                        <img className="img2" src={`${backgroundImage}`} alt="firstPage" />
                    </div>
                    : <RightComponent
                        namee={this.state.name}
                        image={this.state.image}
                        message={this.state.messages}
                        senderId={this.state.senderId}
                        receiverId={this.state.receiver}
                    />
                }
            </div>
        )
    }
}

export default LeftComponent
