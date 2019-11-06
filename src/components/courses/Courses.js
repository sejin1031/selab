import React from 'react';
import {Link} from "react-router-dom";
import './Course.css';

class Course extends React.Component {
     render() { 
        return (
            <div>
               <h1 id='title'>Course</h1>
               <br />
               <div id="course_table">
                   <table id="first_table">
                       <tbody>
                           <tr>
                               <th id="coursenum" colspan="2">Undergraduate Course</th>
                           </tr>
                           <tr>
                                <td id="coursenum" data-href="cse107">CSE107</td>
                                <td id="course" data-href="cse107">Logical Fundamentals of Programming</td>
                            </tr>
                            <tr>
                                <td id="coursenum" data-href="cse117">CSE117</td>
                                <td id="course" data-href="cse117">Programming Fundamentals</td>
                            </tr>
                            <tr>
                                <td class="coursenum" data-href="cse322">CSE322</td>
                                <td class="course" data-href="cse322">Web Programming</td>
                            </tr>
                            <tr>
			                    <td class="coursenum active" data-href="cse326">CSE326</td>
			                    <td class="course active" data-href="cse326"><Link to="/course/cse326">Web Application Development</Link></td>
		                    </tr>
                            <tr>
			                    <td class="coursenum" data-href="cse406">CSE406</td>
			                    <td class="course" data-href="cse406">Software Engineering</td>
		                    </tr>                           
                       </tbody>
                   </table>
                </div>
                   
               <div id="course_table">
                   <table id="first_table">
                       <tbody>
                           <tr>
                               <th id="coursenum" colspan="2">Postgraduate Course</th>
                           </tr>
                           <tr>
                                <td id="coursenum" data-href="cin870">CIN870</td>
                                <td id="course" data-href="cse107">Formal methods</td>
                            </tr>
                            <tr>
                                <td id="coursenum" data-href="cse603">CSE603</td>
                                <td id="course" data-href="cse117">Management of Semistructured Data</td>
                            </tr>
                            <tr>
                                <td class="coursenum" data-href="cse609">CSE609</td>
                                <td class="course" data-href="cse322">Model Checking</td>
                            </tr>
                            <tr>
			                    <td class="coursenum active" data-href="cse639">CSE639</td>
			                    <td class="course active" data-href="cse639">Special Topics in Software Engineering</td>
		                    </tr>
                            <tr>
			                    <td class="coursenum" data-href="cse6050">CSE6050</td>
			                    <td class="course" data-href="cse6050">Advanced Engineering</td>
		                    </tr>                           
                       </tbody>
                   </table>
                   
               </div>
            </div>
         )
     }
}

export default Course;