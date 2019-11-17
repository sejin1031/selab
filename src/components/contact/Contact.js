import React, { Component } from 'react'

import './Contact.scss';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="Modal-overlay" />
            <div className="MyModal">
                <div className="contactContent">
                <div className="closeButton"
                onClick={this.props.popupHandler}>x</div>
                <div className="map">

                </div>
                </div>

            </div>
        </React.Fragment>
        )
    }
}
