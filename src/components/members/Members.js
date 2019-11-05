import React, { Component }  from 'react';
import '../../style/members.css'
import Professor from './Professor'
import PhD from './PhD'
import ME from './ME'

class Members extends Component {
	static defaultProps = {
   		name: '즈기요'
  	}
	constructor(props) {
    	super(props);
    	this.state = {
      		showPopup: false,
      		showPopup1: false,
      		showPopup2: false,
      		showPopup3: false,
      		showPopup4: false,
      		showPopup5: false,
      		showPopup6: false,
      		showPopup7: false,
      		showPopup8: false,
      		showPopup9: false,
      		showPopup10: false,
      		showPopup11: false,
      		showPopup12: false,
    	};
  	}
  	togglePopup() {
	    this.setState({
	    	showPopup: !this.state.showPopup
	    });
	}
	togglePopup1() {
	    this.setState({
	    	showPopup1: !this.state.showPopup1,
	    });
	}
	togglePopup2() {
	    this.setState({
	    	showPopup2: !this.state.showPopup2,
	    });
	}
	togglePopup3() {
	    this.setState({
	    	showPopup3: !this.state.showPopup3,
	    });
	}
	togglePopup4() {
	    this.setState({
	    	showPopup4: !this.state.showPopup4,
	    });
	}
	togglePopup5() {
	    this.setState({
	    	showPopup5: !this.state.showPopup5,
	    });
	}
	togglePopup6() {
	    this.setState({
	    	showPopup6: !this.state.showPopup6,
	    });
	}
	togglePopup7() {
	    this.setState({
	    	showPopup7: !this.state.showPopup7,
	    });
	}
	togglePopup8() {
	    this.setState({
	    	showPopup8: !this.state.showPopup8,
	    });
	}
	togglePopup9() {
	    this.setState({
	    	showPopup9: !this.state.showPopup9,
	    });
	}
	togglePopup10() {
	    this.setState({
	    	showPopup10: !this.state.showPopup10,
	    });
	}
	togglePopup11() {
	    this.setState({
	    	showPopup11: !this.state.showPopup11,
	    });
	}
	togglePopup12() {
	    this.setState({
	    	showPopup12: !this.state.showPopup12,
	    });
	}

    render() {
        return (
        	<div>
        			<div className='professor'>
	        			<h1>Professor</h1>
	        			<div className='members'>
			        		<a onClick={this.togglePopup.bind(this)}>Scott Uk-Jin Lee</a>
			        		{this.state.showPopup ? 
						        <Professor
						            closePopup={this.togglePopup.bind(this)}
						        >
					        </Professor>
					          : null
					        }
			        </div>
			        <div className='PhD'>
				        <h1>PhD</h1>
				        <div className='members'>
					        <a onClick={this.togglePopup1.bind(this)}>Isma Farah</a>
			        		{this.state.showPopup1 ? 
						        <PhD name="Isma Farah"
						            closePopup={this.togglePopup1.bind(this)}
						        />
					          : null
					        }
				        </div>
				        <div className='members'>
					        <a onClick={this.togglePopup2.bind(this)}>Abdul Rahim</a>
			        		{this.state.showPopup2 ? 
						        <PhD name="Abdul Rahim"
						            closePopup={this.togglePopup2.bind(this)}
						        />
					          : null
					        }
				        </div>
				        <div className='members'>
					        <a onClick={this.togglePopup3.bind(this)}>Asad Abbas</a>
			        		{this.state.showPopup3 ? 
						        <PhD name="Asad Abbas"
						            closePopup={this.togglePopup3.bind(this)}
						        />
					          : null
					        }
				        </div>
				        <div className='members'>
					        <a onClick={this.togglePopup4.bind(this)}>Mohsin Javaid</a>
			        		{this.state.showPopup4 ? 
						        <PhD name="Mohsin Javaid"
						            closePopup={this.togglePopup4.bind(this)}
						        />
					          : null
					        }
				        </div>
				        <div className='members'>
					        <a onClick={this.togglePopup5.bind(this)}>Muhammad Umair Khan</a>
			        		{this.state.showPopup5 ? 
						        <PhD name="Muhammad Umair Khan"
						            closePopup={this.togglePopup5.bind(this)}
						        />
					          : null
					        }
				        </div>

				    <div className='ME'>
				    	<h1>M.E.</h1>
				        <div className='members'>
					        <a onClick={this.togglePopup6.bind(this)}>Gayeon Kim</a>
			        		{this.state.showPopup6 ? 
						        <ME name="Gayeon Kim"
						            closePopup={this.togglePopup6.bind(this)}
						        />
					          : null
					        }
				        </div>
				         <div className='members'>
					        <a onClick={this.togglePopup7.bind(this)}>Seonwoong Kim</a>
			        		{this.state.showPopup7 ? 
						        <ME name="Seonwoong Kim"
						            closePopup={this.togglePopup7.bind(this)}
						        />
					          : null
					        }
				        </div>
				         <div className='members'>
					        <a onClick={this.togglePopup8.bind(this)}>Wu Zhiqiang</a>
			        		{this.state.showPopup8 ? 
						        <ME name="Wu Zhiqiang"
						            closePopup={this.togglePopup8.bind(this)}
						        />
					          : null
					        }
				        </div>
				         <div className='members'>
					        <a onClick={this.togglePopup9.bind(this)}>Gwanggyu Choi</a>
			        		{this.state.showPopup9 ? 
						        <ME name="Gwanggyu Choi"
						            closePopup={this.togglePopup9.bind(this)}
						        />
					          : null
					        }
				        </div>
				         <div className='members'>
					        <a onClick={this.togglePopup10.bind(this)}>Hyunglak Kim</a>
			        		{this.state.showPopup10 ? 
						        <ME name="Hyunglak Kim"
						            closePopup={this.togglePopup10.bind(this)}
						        />
					          : null
					        }
				        </div>
				         <div className='members'>
					        <a onClick={this.togglePopup11.bind(this)}>Kyojune Hwang</a>
			        		{this.state.showPopup11 ? 
						        <ME name="Kyojune Hwang"
						            closePopup={this.togglePopup11.bind(this)}
						        />
					          : null
					        }
				        </div>
				        <div className='members'>
					        <a onClick={this.togglePopup12.bind(this)}>Hakjin Lee</a>
			        		{this.state.showPopup12 ? 
						        <ME name="Hakjin Lee"
						            closePopup={this.togglePopup12.bind(this)}
						        />
					          : null
					        }
				        </div>
				    </div>
				    </div>
		        </div>
	      	</div>

        );
    }
}



export default Members;