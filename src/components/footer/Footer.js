import React, { Component } from 'react'
import Link from 'react-router-dom';
import Egg from '../easter/egg';

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
        };
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
    render() {
        const style = {
            left: this.state.left ,
            bottom: this.state.bottom,
            position:"relative",
        }
        return (
            <div className="footer" onClick={this.easter_egg.bind(this)}>
                 <div className="bonodiv" >
                {this.state.easter ?
                    <img className="bonobono" src={this.state.bonobono}
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
                Made for CSE326 Class's Team Project
            </div>
        )
    }
}
