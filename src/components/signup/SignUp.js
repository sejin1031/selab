import React, { Component } from 'react'
import axios from 'axios';

import './SignUp.scss';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            pw : '',
            name : '',
            auth : '',
        }
       this.handleIDChange = this.handleIDChange.bind(this);
       this.handlePWChange = this.handlePWChange.bind(this); 
       this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleIDChange(event) {
        this.setState({id: event.target.value});
    }
    handlePWChange(event) {
        this.setState({pw: event.target.value});
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    singUpSubmit= async() => {
        var flag = await axios('/login/signup',{
          method : 'POST',
          data : {id : this.state.id,
                  pw :this.state.pw,
                  name : this.state.name
                },
          
                headers : new Headers()
        })
      }

    render() {
        return (
            <React.Fragment>
                <div className="Modal-overlay" />
                <div className="Modal">
                <button className="closebutton" onClick={this.props.handlesignupPopup}> X </button>
                    <p className="title">SignUp</p>
                    <div className="content">
                    <form onSubmit={this.singUpSubmit}>
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
                        <label>
                            <span className="loginFont">name</span><br/>
                            <input type = "text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                        </label>
                        <br/>
                        <div className="button-wrap">
                         <input type="submit" value="SignUp" />
                        </div>
                    </form>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
