import React, { Component } from 'react'
import Link from 'react-router-dom';
import Egg from './egg';
import './easter.css';


export default class Footer extends Component {

	constructor(props) {
        super(props);
        this.state = {
            bonobono: require('./bonobono.png'),
            modal: false,
            left:Math.round(Math.random()*1800),
            bottom:Math.round(Math.random()*1000),
            text:"Show Easter Egg",
            easter:false,
        };
    }
    handleOpenModal() {
	    this.setState({
	      modal: true,
          easter: !this.state.easter,
          bonobono: require('./bonobono.png')
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
            bottom:Math.round(Math.random()*900),
            easter: !this.state.easter,
        });


        
    }
//setTimeout(this.timer.bind(this),0)
    render() {
        if(this.state.easter==true)
            this.state.text="Hide Easter Egg";
        else
            this.state.text="Show Easter Egg";
        const style = {
            left: this.state.left ,
            bottom: this.state.bottom,
            position:"relative",
        }

        return (
            <div className="easter" >
                <div className="easter_btn">
                    <button  onClick={this.easter_egg.bind(this)}>{this.state.text}</button>
                </div>
                <div className="bonodiv">
                {this.state.easter ?
                    <img className="bonobono" src={this.state.bonobono}
                        style={style}
                        onMouseOver={function(){
                            this.setState({
                                bonobono: require('./bonobonohover.png'),
                            })
                        }.bind(this)}
                        onMouseOut={function(){
                            this.setState({
                                bonobono: require('./bonobono.png'),
                            })
                        }.bind(this)}
                        onClick={this.handleOpenModal.bind(this)}
                    /> :null
                }
                {this.state.modal && (
			        <Egg onClose={this.handleCloseModal.bind(this)} />
		        )}
                </div> 
                /
            </div>
        )
    }
}
