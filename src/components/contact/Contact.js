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
                    <div className="content">
                         <div className="map">
                            <img src={require('./map.jpg')} alt="map"/>
                        </div>
                        <div className="describe">
                            <span>CONTACT</span>
                            <ul>
                                <li>연구실 <br/>| Room 617 @ Erica Support Center</li>
                                <li>주소   <br/>| AnsanSi</li>
                                <li>Tel    <br/>| 031-400-5238</li>
                                <li>Hompage<br/> | http://selab.hanyang.ac.kr</li>
                                <li>Email  <br/>| scottlee@hanyang.ac.kr</li>
                            </ul>
                        
                        </div>
                    </div>
                
                </div>

            </div>
        </React.Fragment>
        )
    }
}
