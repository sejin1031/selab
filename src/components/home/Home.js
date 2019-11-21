import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ReactDom from 'react-dom';
import SignUp from '../signup/SignUp';
import Message from '../message/Message';

import 'react-viewer/dist/index.css';
import './homeimage.scss';
import axios from 'axios';

var messages = [
  {name:'scott',
  content:'you are fail',
  time:'18:20'},
  {name:'junyoung',
  content:'HYCube is nice',
  time:'23:20'},
  {name:'jongmin',
  content:'chegg is evil',
  time:'18:20'}
]

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '',pw:'',signupPopup:false,messagePopup:false};

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
    var flag = await axios('/login/signin',{
      method : 'POST',
      data : {id : this.state.id,
              pw : this.state.pw
            },
      
            headers : new Headers()
    })
    if(flag.data.isLoggedin == true){
      this.props.loginHandler(this.state.id,flag.data.auth)
      alert("login success")
    }
    else {
      alert("login fail")
    }
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

              {this.state.messagePopup && <Message handleMessagePopup={this.handleMessagePopup}/>}

              <div className="messages">
                <div className="recent">Recent Messages</div>
                {messages.map((index,name,time,content)=>
                <div key={index}>
                    <span className="name">{index.name}</span>
                    
                   <div className="message">
                   {index.content} <span className="time">{index.time}</span></div>
                </div>)}
              </div>
          </div>}
          

        </div>
        
        
      );
    }
  }

export default Home;