import React, { Component } from 'react';
import "./noticestyle.css"

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
                    <div>
                      <div><span className = "ntable">Title : </span>{this.state.data.title} <span className = "ntable">Writer : </span>{this.state.data.writer}</div><hr/>
                      <div><span className = "ntable">Content : </span><br/>{this.state.data.content}</div><hr/>
                      <div><span className = "ntable">Date : </span>{this.state.data.date}</div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default BoardRow;
