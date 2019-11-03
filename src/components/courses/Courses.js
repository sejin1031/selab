import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Course extends React.Component {
    render() {
        return (
            <div>
                <div>
                <h2>Course</h2>
                <Link to="/course/cse326">
                    CSE326
                </Link>
                <br/>
                <Link to="/course/slide">
                    Slides
                </Link>
                </div>
            </div>
        );
    }
}

export default Course;