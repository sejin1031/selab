import React, { Component } from "react";
import ToggleBox from "./ToggleBox";

class Cse326 extends Component {
	render(){
		return (
            <div className="main">
                <ToggleBox title="Schdule">
                    <div className="content">schedule</div>
                </ToggleBox>
                <br/>
                <ToggleBox title="TeamProject">
                    <div className="content">TeamProject</div>
                </ToggleBox>
                <br/>
                <ToggleBox title="what">
                    <div className="content">what</div>
                </ToggleBox>
            </div>
		);
	}
}

export default Cse326;