import React, { Component } from 'react';
import People from './People'

class MemberMenu extends Component {
	constructor(props){
      super(props);
      this.state={
      	name: null,
      	showPopup:false,
      };
     }

 	togglePopup() {
	    this.setState({
	    	showPopup: !this.state.showPopup,
	    });
	}
    render() {
        return (
            <div>
                <h1 className="position">Professor</h1>
                <div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Scott"
					})
				}.bind(this)}>Scott</div>
                {this.state.showPopup ? 
                	<People className="people"  name={this.state.name}
                	closePopup={this.togglePopup.bind(this)} />
                	: null
		        }
				<h1 className="position">PhD</h1>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Isma Farah"
					})
				}.bind(this)}>Isma Farah</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Abdul Rahim"
					})
				}.bind(this)}>Abdul Rahim</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Asad Abbas"
					})
				}.bind(this)}>Asad Abbas</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Gichan Lee"
					})
				}.bind(this)}>Gichan Lee</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Mohsin Javaid"
					})
				}.bind(this)}>Mohsin Javaid</div>

				<h1 className="position">M.E.</h1>

				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Gayeon Kim"
					})
				}.bind(this)}>Gayeon Kim</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Seonwoong Kim"
					})
				}.bind(this)}>Seonwoong Kim</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Wu Zhiqiang"
					})
				}.bind(this)}>Wu Zhiqiang</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Gwanggyu Choi"
					})
				}.bind(this)}>Gwanggyu Choi</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Hyunglak Kim"
					})
				}.bind(this)}>Hyunglak Kim</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Youn Guen Ahn"
					})
				}.bind(this)}>Youn Guen Ahn</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Kyojune Hwang"
					})
				}.bind(this)}>Kyojune Hwang</div>
				<div className="members" onClick={function(){
					this.setState({
						showPopup:true,
						name:"Hakjin Lee"
					})
				}.bind(this)}>Hakjin Lee</div>
				
            </div>
        )
    }
}
export default MemberMenu;
