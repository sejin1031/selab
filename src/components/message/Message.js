import React, { Component } from 'react'

import './Message.scss';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedId : '',
            text : '',
            userList : ["junyoung","hyunsoo","jongmin","HYCUBE회장","JARAM","hyunsoo","jongmin","HYCUBE회장","JARAM"],              
        }
        
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
                        {this.state.userList.map((name,index)=>
                        <div key={index} className="users"
                        onClick={()=>this.setState({selectedId:name})}>{name}</div>)}
                    </div>
                    <div className="messageContent">
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
            </div>
        )
    }
}
