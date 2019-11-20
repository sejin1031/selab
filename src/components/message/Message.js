import React, { Component } from 'react'

import './Message.scss';
import axios from 'axios';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedId : '',
            text : '',
            userList : ["junyoung","hyunsoo","jongmin","HYCUBE회장","JARAM","hyunsoo","jongmin","HYCUBE회장","JARAM"],
            chatList:[],
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        
    }

    componentDidMount(){/*
        this.messageTest();
        /*
        fetch('/chatlist&id='+this.props.id)
        .then(res => res.json(res))
        .then(res => this.setState({chatList:res,userList:[...new Set(res.map(res => res.receiver || res.sender))]}))
        */
    }
    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    messageTest= async() => {
        var flag = await axios('/message',{
          method : 'POST',
          data : {id : "test",
                },
                headers : new Headers()
        })
        alert("message")
      }

      messageTest2= async() => {
        var flag = await axios('/message/user',{
          method : 'POST',
          data : {id : "test",
                },
                headers : new Headers()
        })
        alert("message")
      }

    render() {
        return (
            <div>
                <React.Fragment>
            <div className="Modal-overlay" />
            <div className="MyModal">
                <div className="messageContent">
                        <div className="closebutton" onClick={this.props.handleMessagePopup}>x</div>
                    <div className="list">
                        <div className="title">RECEIVED LIST</div>
                        <div className="names">
                        {this.state.userList.map((name,index)=>
                        <div key={index} className={name===this.state.selectedId? "selectedusers":"users"}
                        onClick={()=>this.setState({selectedId:name})}>{name}</div>)}
                        </div>
                    </div>
                    <div className="chat">
                        <div className="chatcontent">
                            {
                            this.state.chatList.filter(message => message.receiver===this.state.selectedId 
                                && message.sender === this.props.id 
                                || message.receiver === this.props.id && message.sender=== this.state.selectedId)
                                .map((index,sender,receiver,text,time)=>
                            (<div key={index} className={index.sender === this.state.selectedId?"receiveContent":"sendContent"}>
                                {index.text} {index.time}
                            </div>)
                            )}
                            <div className="receiveContent">receive</div>
                            <br/>
                            <div className="sendContent">sended</div>
                            </div>
                        <div className="send">
                            <input type="text" value={this.state.text} onChange={this.handleTextChange}></input>
                            <div className="sendButton" onClick={this.messageTest2}>send</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
            </div>
        )
    }
}
