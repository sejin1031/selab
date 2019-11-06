import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ReactDom from 'react-dom';


import 'react-viewer/dist/index.css';
import './homeimage.scss';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '',pw:''};

    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleIDChange(event) {
    this.setState({id: event.target.value});
  }
  handlePWChange(event) {
    this.setState({pw: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.id + this.state.pw);
    event.preventDefault();
  }

    render() {
      
      
      return (
        <div className="home">
            <img src={require("./selab_logo2.png")} alt="logo" />
          <div className="login">
            <form onSubmit={this.handleSubmit}>
            <label>
              <span className="loginFont">ID</span><br/>
              <input type="text" value={this.state.id} onChange={this.handleIDChange} />
            </label>
            <br/>
            <label>
              <span className="loginFont">Password</span><br/>
              <input type="password" value={this.state.pw} onChange={this.handlePWChange} />
            </label>
            <br/>
              <input type="submit" value="Login" />
            </form>
          
         </div>

        </div>
        
        
      );
    }
  }

export default Home;