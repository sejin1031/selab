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
        };
    }
    handleOpenModal() {
	    this.setState({
	      modal: true,
	    });
	}
  	handleCloseModal() {
	    this.setState({
	      modal: false,
	    });
    }
    render() {
        return (
            <div className="easter">
                <img className="bonobono" src={this.state.bonobono}
                    onMouseOver={function(){
                        this.setState({
                            bonobono: require('./bonobonohover.png')
                        })
                    }.bind(this)}
                    onMouseOut={function(){
                        this.setState({
                            bonobono: require('./bonobono.png')
                        })
                    }.bind(this)}
                    onClick={this.handleOpenModal.bind(this)}
                    
                 />
                {this.state.modal && (
			        <Egg onClose={this.handleCloseModal.bind(this)} 
		            />
		        )}
            </div>
        )
    }
}
