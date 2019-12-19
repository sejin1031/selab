import React, { Component } from 'react';

class BoardRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data : this.props.popup
        };
        console.log(this.props.popup)
        console.log(this.state.data.date)
      }
    
    render() {
        return(
            <React.Fragment>
                <div className="Modal-overlay" />
                <div className="Modal">
                <button className="closebutton" > X </button>
                <p className="title">{this.state.data.date}SignUp</p>
                    <div className="content">
                    <form>
                        <label>
                        <span className="loginFont">ID</span><br/>
                        <input type="text" name="id"/>
                        </label> 
                        <br/>
                        <label>
                        <span className="loginFont">Password</span><br/>
                        <input type="password" name="pw"/>
                        </label>
                        <br/>
                        <label>
                            <span className="loginFont">name</span><br/>
                            <input type = "text" name="name"/>
                        </label>
                        <br/>
                        <div className="button-wrap">
                         <input type="submit" value="SignUp" />
                        </div>
                    </form>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default BoardRow;