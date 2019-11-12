import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ReactDom from 'react-dom';
import SignUp from '../signup/SignUp';

import 'react-viewer/dist/index.css';
import './homeimage.scss';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '',pw:'',signupPopup:false,};

    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.handleSignupPopup = this.handleSignupPopup.bind(this);
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
    var flag = await axios('add/data',{
      method : 'POST',
      data : {'id' : this.state.id,
              'pw':this.state.pw
            },
      
            headers : new Headers()
    })
    if(flag.data.isLoggedin == true){
      this.setState({isLoggedin : true});
      this.props.idHandler(this.state.id);
    }
  }

    render() {
      return (
        <div className="home">
            <img src={require("./selab_logo2.png")} alt="logo" />
          {!this.props.isLoggedin && <div className="login">
            <form onSubmit={this.loginSubmit}>
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
              <input type="submit" value="Login" />
            </form>
            <div onClick={()=>this.setState({signupPopup:!this.state.signupPopup})}>signup</div>
         </div>}
          {this.state.signupPopup &&<SignUp handlesignupPopup={this.handleSignupPopup}/>}
         {this.props.isLoggedin &&
         <div>로그인됨.</div>}
          

        </div>
        
        
      );
    }
  }

export default Home;