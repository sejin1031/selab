import React from 'react';
import {Link} from "react-router-dom";
import "./courses.css"

class Course extends React.Component {
     render() { 
        return (
            <div class = "Course">
               <h1 id='course_title'>Course</h1>

               <br />

               <div class="under_courses">
                  <img src= {require("./hanyang_university.png")}/>
                   <h2> Undergraduate Courses</h2>
                   <ul id = "under_list">
                     <li id = "course_list"><Link to="/course/cse326">CSE326:Web Application Development</Link></li>
                     <li id = "course_list">CSE107:Logical Fundamentals of Programming</li>
                     <li id = "course_list">CSE117:Programming Fundamentals</li>
                     <li id = "course_list">CSE322:Web Programming</li>
                     <li id = "course_list">CSE406:Software Engineering</li>
                   </ul>
                </div>
               <div class="line">
               </div>
               <div class="post_courses">
                  <img src= {require("./hanyang_university.png")}/>
                  <h2> Postgraduate Courses</h2>
                  <ul id="post_list">
                    <li id = "course_list">CIN870:Formal Methods</li>
                    <li id = "course_list">CSE603:Management of Semistructured Data</li>
                    <li id = "course_list">CSE609:Model Checking</li>
                    <li id = "course_list">CSE639:Special Topics in Software Engineering</li>
                  </ul>
               </div>
            </div>
         )
     }
}

export default Course;