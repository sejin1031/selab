import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ReactDom from 'react-dom';
import SignUp from '../signup/SignUp';
import Message from '../message/Message';

import 'react-viewer/dist/index.css';
import './homeimage.scss';
import axios from 'axios';

var chat = [{
  receive:'scott',
  send:'sejin',
  text:'Hello',
  date:'19/11/21',
  },{
      receive:'sejin',
      send:'scott',
      text:'Hi',
      date:'19/11/21',
      },
      {
          receive:'scott',
          send:'jongmin',
          text:'Hey scott give me A',
          date:'19/11/21',
          },]

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw:'',
      recentMessages:[],
      signupPopup:false,
      messagePopup:false
    };

    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.handleSignupPopup = this.handleSignupPopup.bind(this);
    this.handleMessagePopup = this.handleMessagePopup.bind(this);
  }
  handleMessagePopup(){
    this.setState({messagePopup:false})
  }

  handleSignupPopup(){
    this.setState({signupPopup:false})
  }

  handleIDChange(event) {
    this.setState({id: event.target.value});
  }
  handlePWChange(event) {
    this.setState({pw: event.target.value});
  }
  loginSubmit= async() => {
    var flag = await axios('/signin',{
      method : 'POST',
      data : {id : this.state.id,
              pw : this.state.pw
            },
      
            headers : new Headers()
    })
    if(flag.data.isLoggedin == true){
      this.props.loginHandler(this.state.id,flag.data.grade)
      alert("login success")
    }
    else {
      alert("login fail")
    }
  }
  getMessages=async()=>{
    var flag = await axios('/message/mainpage',{
      method:'POST',
      data : {
          id : this.state.id,
      },
      headers : new Headers()
    })
    // this.setState({recentMessages:flag.data.})
  }
  
    render() {
      return (
        <div className="home">
            <img src={require("./selab_logo.png")} alt="logo" />
          {!this.props.isLoggedin && <div className="login">
            <label>
              <span className="loginFont">ID</span><br/>
              <input type="text" name="id" value={this.state.id} onChange={this.handleIDChange} />
            </label> 
            <br/>
            <label>
              <span className="loginFont">Password</span><br/>
              <input type="password" name="pw" value={this.state.pw} onChange={this.handlePWChange} />
            </label>
            <br/>
            <div className="buttons">
              <div onClick={this.loginSubmit} className="loginButton">Login</div>
              <div className = "signup" onClick={()=>this.setState({signupPopup:!this.state.signupPopup})}>signup</div>
            </div>
         </div>}

          {this.state.signupPopup &&<SignUp handlesignupPopup={this.handleSignupPopup}/>}
         {this.props.isLoggedin &&
         <div className="logined">
           <div onClick={this.props.logoutHandler}
           className="logoutButton">logout</div>
              <p>Logined by {this.props.id}</p>
              <div className="Mail" onClick={()=>this.setState({messagePopup:true})}>
                <img src={require('./mail_icon.png')} alt="mail"/>
                </div>

              {this.state.messagePopup && <Message handleMessagePopup={this.handleMessagePopup} id={this.props.id}/>}

              <div className="messages">
                <div className="recent">Recent Messages</div>
                {chat.filter(ch => ch.receive === this.props.id).map((index,receive,send,text)=>
                <div key={index}>
                    <span className="name">{index.send}</span>
                    
                   <div className="message">
                   {index.text} <span className="time">{index.date}</span></div>
                </div>).slice(0,3)}
              </div>
          </div>}
          

        </div>
        
        
      );
    }
  }

export default Home;