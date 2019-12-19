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
                    <div className="content">
                      <div>Title : {this.state.data.title}</div><hr/>
                      <div>Date : {this.state.data.date}</div><hr/>
                      <div>Writer : {this.state.data.writer}</div><hr/>
                      <div>Content : {this.state.data.content}</div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default BoardRow;
