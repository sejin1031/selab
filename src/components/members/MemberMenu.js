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
        	<div className="mem">
	            <div className="people_popup">
	            	{this.state.showPopup ? 
	                	<People className="people"  name={this.state.name}
	                	closePopup={this.togglePopup.bind(this)} />
	                	: null
			        }
		        </div>
			    <div className="people_left">
	                <h1 className="position">Professor</h1>
	                <div className="membersdiv">
	                	<span className="members" 
			                onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Scott"
								})
							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Scott
							<img className="popoutme" src={require('./photo/Scott.jpg')} alt='No photo'/>
						</span>
					</div>
					<h1 className="position">PhD</h1>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Isma Farah"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Isma Farah
							<img className="popoutme" src={require('./photo/Isma Farah.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Abdul Rahim"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Abdul Rahim
							<img className="popoutme" src={require('./photo/Abdul Rahim.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Asad Abbas"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Asad Abbas
							<img className="popoutme" src={require('./photo/Asad Abbas.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Gichan Lee"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Gichan Lee
							<img className="popoutme" src={require('./photo/Gichan Lee.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Mohsin Javaid"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Mohsin Javaid
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Muhammad Umair Khan"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Muhammad Umair Khan
							<img className="popoutme" src={require('./photo/Muhammad Umair Khan.jpg')} alt='No photo'/>
						</span>
					</div>


					<h1 className="position">M.E.</h1>


					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Gayeon Kim"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Gayeon Kim
							<img className="popoutme" src={require('./photo/Gayeon Kim.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Seonwoong Kim"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Seonwoong Kim
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Wu Zhiqiang"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Wu Zhiqiang
							<img className="popoutme" src={require('./photo/Wu Zhiqiang.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Gwanggyu Choi"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Gwanggyu Choi
							<img className="popoutme" src={require('./photo/Gwanggyu Choi.gif')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Hyunglak Kim"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Hyunglak Kim
							<img className="popoutme" src={require('./photo/Hyunglak Kim.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Youn Guen Ahn"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Youn Guen Ahn
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Kyojune Hwang"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Kyojune Hwang
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Hakjin Lee"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Hakjin Lee
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>

					<h1 className="position">Intern</h1>

					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Dahae Sung"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Dahae Sung
							<img className="popoutme" src={require('./photo/Dahae Sung.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Yongtaek Oh"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Yongtaek Oh
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Namju Park"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Namju Park
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>

					<h1 className="position">Alumni</h1>
					
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Jaejin Kim"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Jaejin Kim
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Jiang Hua"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Jiang Hua
							<img className="popoutme" src={require('./photo/Jiang Hua.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Jaeho Choi"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Jaeho Choi
							<img className="popoutme" src={require('./photo/Jaeho Choi.JPG')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members" 
							onMouseOver={function(){
								this.setState({
									showPopup:true,
									name:"Geunhwan Park"
								})

							}.bind(this)}
							onMouseOut={function(){
								this.setState({
									showPopup:false
								})
							}.bind(this)}>Geunhwan Park
							<img className="popoutme" src={require('./photo/Geunhwan Park.jpg')} alt='No photo'/>
						</span>
					</div>

	            </div>
            </div>
        )
    }
}
export default MemberMenu;
