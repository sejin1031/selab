import React from 'react';
import Cse326 from './CSE326/Cse326';
import Slides from './CSE326/slides';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Course extends React.Component {
    render() {
        return (
            <div>
                <div>
                <h2>Course</h2>
                <Link to="/course/cse326">
                    asdfsa
                    <Cse326/>
                </Link>
                <Link to="/course/slide">
                    <Slides/>
                </Link>
                </div>
            </div>
        );
    }
}

export default Course;