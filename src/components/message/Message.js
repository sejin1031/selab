import React, { Component } from 'react'

import './Message.scss';
import axios from 'axios';

var moment = require("moment");
           

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedId : '',
            text : '',
            userList : [],
            chatList:[],
            newid:'',
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNewID = this.handleNewID.bind(this);
        this.getMessages();
        this.getUsers();
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }
    handleNewID(event){
        this.setState({newid: event.target.value})
    }

    getMessages = async()=>{
        var flag = await axios('/message/data',{
            method : 'POST',
            data:{
                id:this.props.id,
            },
            headers : new Headers()
        })
        this.setState({chatList:flag.data})
    }
    getUsers = async()=>{
        var flag = await axios('/message/user',{
            method : 'POST',
            data:{
                id:this.props.id,
            },
            headers : new Headers()
        })
        let users = [];
        flag.data.map((index)=>{
            if(!users.includes(index.send)){
                users.push(index.send)
            }
        })
        this.setState({userList:users})
    }

      sendMessage= async()=>{
          if(this.state.selectedId === "newMessage"){
            var flag = await axios('/message/send',{
                method: 'POST',
                data : {
                    send : this.props.id,
                    recieve : this.state.newid,
                    text : this.state.text,
                    date : moment(new Date()).format("YYYY.MM.DD hh:mm")
                }
            })
          }
          else{
          var flag = await axios('/message/send',{
              method: 'POST',
              data : {
                  send : this.props.id,
                  recieve : this.state.selectedId,
                  text : this.state.text,
                  date : moment(new Date()).format("YYYY.MM.DD hh:mm")
              }
          })
        }
        if(flag.data.receive){
            this.getMessages();
            this.getUsers();
        }
        else{
            alert("존재하지 않는 사용자입니다")
        }
      }

      scrollToBottom() {


        var objDiv = document.getElementById("chatcontent");
        objDiv.scrollTop = objDiv.scrollHeight;
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
                            <div className="users" onClick={()=>this.setState({selectedId:"newMessage"})}>new Messages</div>
                        {this.state.userList.map(name=>
                        <div key={name} className={name===this.state.selectedId? "selectedusers":"users"}
                        onClick={()=>this.setState({selectedId:name})}>{name}</div>)}
                        </div>
                    </div>
                    <div className="chat">
                        <div id="chatcontent" >
                            {this.state.selectedId === "newMessage" &&
                            <input id="newid" 
                            placeholder="ID"
                             type="text" 
                             value={this.state.newid} 
                             onChange={this.handleNewID}></input>
                                                    }
                            {
                            this.state.chatList.filter(message => message.receive===this.state.selectedId 
                                && message.send === this.props.id 
                                || message.receive === this.props.id && message.send=== this.state.selectedId)
                                 .map(index=>
                            (<div key={index} className={index.receive == this.state.selectedId && index.send == this.props.id?"sendContent":"receiveContent"}>
                                {index.date} {index.text}
                            </div>
                            )
                            )}
                         
                            </div>
                        <div className="send">
                            <input type="text" value={this.state.text} onChange={this.handleTextChange}></input>
                            <div className="sendButton" onClick={this.sendMessage}>send</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
            </div>
        )
    }
}
