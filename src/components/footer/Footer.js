import React, { Component } from 'react'
import Link from 'react-router-dom';
import Egg from '../easter/egg';
import Contact from '../contact/Contact';

import './Footer.scss';
import '../easter/easter.css'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bonobono: require('../easter/bonobono.png'),
            modal: false,
            left:Math.round(Math.random()*100),
            bottom:Math.round(Math.random()*1000),
            easter:false,
            contactPopup:false,
            text: "Made for CSE326 Class's Team Project",
        };
        this.contactPopupHandler =this.contactPopupHandler.bind(this);
    }
    handleOpenModal() {
	    this.setState({
	      modal: true,
          easter: !this.state.easter,
          bonobono: require('../easter/bonobono.png')
	    });
	}
  	handleCloseModal() {
	    this.setState({
	      modal: false,
	    });
    }
 
    easter_egg() {
        this.setState({
            left:Math.round(Math.random()*1700),
            bottom:Math.round(Math.random()*900+1000),
            easter: !this.state.easter,
        }); 

    }
    contactPopupHandler(){
        this.setState({contactPopup:false})
    };
    render() {
        const style = {
            left: this.state.left ,
            bottom: this.state.bottom,
            position:"relative",
        }
        if(this.state.easter==true){
            this.state.text = "I'm the Easter egg, you find me!!";
        }
        else{
            this.state.text = "Made for CSE326 Class's Team Project";
        }
        return (
            <div className="footer">
                 <div className="bonodiv" >
                {this.state.easter ?
                    <img alt="bonobono" className="bonobono" src={this.state.bonobono}
                        style={style}
                        onMouseOver={function(){
                            this.setState({
                                bonobono: require('../easter/bonobonohover.png'),
                            })
                        }.bind(this)}
                        onMouseOut={function(){
                            this.setState({
                                bonobono: require('../easter/bonobono.png'),
                            })
                        }.bind(this)}
                        onClick={this.handleOpenModal.bind(this)}
                    /> :null
                }
                {this.state.modal && (
			        <Egg onClose={this.handleCloseModal.bind(this)} />
		        )}
                </div> 
                <div className="footerCenter" onClick={this.easter_egg.bind(this)}>
                    {this.state.text}
                    </div>
                <div className="contact" 
                    onClick={()=>this.setState({contactPopup:!this.state.contactPopup})}>
                    CONTACT
                </div>
                {this.state.contactPopup && 
                <Contact popupHandler={this.contactPopupHandler}/>}
            </div>
        )
    }
}
