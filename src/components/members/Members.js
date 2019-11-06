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
				MEMBER
	      	</div>

        );
    }
}



export default Members;