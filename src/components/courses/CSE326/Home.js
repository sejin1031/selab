import React, { Component } from "react";
import ToggleBox from "./ToggleBox";

class Home extends Component{
    render(){
        return (
            <div className="main">
                <ToggleBox title="Lecturer: Scott Lee">
                    <div className="content">
                        <ul>
                            <li>Office: 학연산클러스터 617호</li>
                            <li>Tel: 031-400-5238</li>
                            <li>Email: scottlee@hanyang.ac.kr</li>
                        </ul>
                    </div>
                </ToggleBox>
                <br/>
                <ToggleBox title="Schedule">
                    <div className="content">
                        <ul>
                            <li>Week 01 : 05/09/2019 - Introduction & The Internet and World Wide Web</li>
                            <li>Week 01 : 06/09/2019 - Basic HTML</li>
                            <li>Week 02 : 12/09/2019 - No Lecture (추석 Thanksgiving)</li>
                            <li>Week 02 : 13/09/2019 - No Lecture (추석 Thanksgiving)</li>
                            <li>Week 03 : 19/09/2019 - Basic HTML</li>
                            <li>Week 03 : 20/09/2019 - CSS for Styling</li>
                        </ul>
                    </div>
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

export default Home;