import React, { Component } from "react";
import ToggleBox from "./ToggleBox";
import './Cse326.scss';

class Cse326 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            home:true,
            slides:false
        }
        this.homeHandler = this.homeHandler.bind(this);
        this.slideHandler = this.slideHandler.bind(this);
    }

    homeHandler(){
        this.setState({
            home:true,
            slides:false});
    }
    slideHandler(){
        this.setState({
            home:false,
            slides:true});
    }

    render(){
		return (
            <div className="main">
                <div className = "buttondiv">
                    <button id = "button_Home" onClick = {this.homeHandler}>Home</button>
                    <button id = "button_Slides" onClick = {this.slideHandler}>Slides</button>
                </div>
                {
                    this.state.home === true? 
                    <div className = "Home">
                        <ToggleBox title ="Course Objective">
                        <p>In this course, the followings will be covered to adequately enable web programming and web application development:</p>
                            <div className="content">
                                <ol>
                                    <li>Understand the protocols, language and systems used on the Web (HTML, CSS, HTTP, URLs, XML)</li>
                                    <li>Understand the functions of clients and servers on the Web & learn how to implement client-side scripts (JavaScript) and server-side scripts (PHP)</li>
                                    <li>Obtain ability to design and implement an interactive web site where usability, accessibility and internationalization issues are considered</li>
                                    <li>Learn how to use/manage database associated with web applications (mainly storage and retrieval)</li>
                                </ol>
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title="Lecturer: Scott Lee">
                            <div className="content">
                                <ul>
                                    <li>Office: 학연산클러스터 617호</li>
                                    <li>Tel: 031-400-5238</li>
                                    <li>Email: scottlee@hanyang.ac.kr</li>
                                </ul>
                            </div>
                        </ToggleBox> 
                        <br />
                        <ToggleBox title="Teaching Assistant">
                            <div className="content">
                                <ul>
                                    <li>Gichan Lee</li>
                                        <ul>
                                            <li>Office: 학연산클러스터 621호</li>
                                            <li>Tel: 031-400-4754</li>
                                            <li>Email: fantasyopy@gmail.com</li>
                                        </ul>
                                    <br />
                                    <li>HakJin Lee</li>
                                        <ul>
                                            <li>Office: 학연산클러스터 621호</li>
                                            <li>Tel: 031-400-4754</li>
                                            <li>Email: gsdjini91@gmail.com</li>
                                        </ul>
                                </ul>
                            </div>
                        </ToggleBox>   
                        <br />
                        <ToggleBox title="Places & Dates">
                        <div className="content">
                                <ul>
                                    <li>Class 1(23497)</li>
                                        <ul>
                                            <li>Lecture : Thu (09:00 - 10:30) & Fri (13:00 - 14:30) @ Engineering Building #1 Room 402</li>
                                            <li>Tel: 031-400-4754</li>
                                            <li>Lab : Fri (09:00 - 11:00) @ Engineering Building #4 PC Room 1 & 2Email: fantasyopy@gmail.com</li>
                                        </ul>
                                    <br />
                                    <li>Class 2(24465)</li>
                                        <ul>
                                            <li>Lecture : Thu (10:30 - 12:00) & Fri (14:30 - 16:00) @ Engineering Building #1 Room 407</li>
                                            <li>lab : Fri (16:00 - 18:00) @ Engineering Building #4 PC Room 1 & 2</li>
                                        </ul>
                                </ul>
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title="Course Forum">
                            <div className="content">
                                <ul>
                                    <a href = "https://learn.hanyang.ac.kr"><li>Blackboard</li></a>
                                </ul>   
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title="Textbooks">
                            <div className="content">
                                <ul>
                                    <li>Marty Stepp, Jessica Miller, Victoria Kirst, Web Programming Step by Step: Second Edition, Step by Step Publishing, 2012</li>
                                </ul>   
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title="Course Schedule">
                            <div className="content">
                                <ul>
                                    <li>Week 01 : 05/09/2019 - Introduction & The Internet and World Wide Web</li>
                                    <li>Week 01 : 06/09/2019 - Basic HTML</li>
                                    <li>Week 02 : 12/09/2019 - No Lecture (추석 Thanksgiving)</li>
                                    <li>Week 02 : 13/09/2019 - No Lecture (추석 Thanksgiving)</li>
                                    <li>Week 03 : 19/09/2019 - Basic HTML</li>
                                    <li>Week 03 : 20/09/2019 - CSS for Styling</li>
                                    <li>Week 04 : 26/09/2019 - CSS for Styling</li>
                                    <li>Week 04 : 27/09/2019 - Page Layout</li>
                                    <li>Week 05 : 02/10/2019 - [특강] 게임 서버 개발 - 17:00 ~ 19:00 @제1학술관 101호 (supplementary lecture for 03/10/2019)</li>
                                    <li>Week 05 : 03/10/2019 - No Lecture (National Foundation Day) - supplementary lecture 02/10/2019</li>
                                    <li>Week 05 : 04/10/2019 - Page Layout</li>
                                    <li>Week 06 : 10/10/2019 - Basic PHP</li>
                                    <li>Week 06 : 11/10/2019 - Basic PHP</li>
                                    <li>Week 07 : 17/10/2019 - Basic PHP</li>
                                    <li>Week 07 : 18/10/2019 - Forms</li>
                                    <li>Week 08 : 24/10/2019 - Mid-Term Exam Preparation</li>
                                    <li>Week 08 : 25/10/2019 - Mid-Term Exam 13:00 ~ 16:00 @제1학술관 101호 (Educational Building I Room 101) & 4공학관 PC1실 (Engineering Building IV PC Room 1)</li>
                                    <li>Week 09 : 31/10/2019 - Forms</li>
                                    <li>Week 09 : 01/11/2019 - Forms</li>
                                    <li>Week 10 : 07/11/2019 - Relational Database & SQL</li>
                                    <li>Week 10 : 08/11/2019 - Relational Database & SQL</li>
                                    <li>Week 11 : 14/11/2019 - JavaScript</li>
                                    <li>Week 11 : 15/11/2019 - JavaScript</li>
                                    <li>Week 12 : 21/11/2019 - JavaScript & DOM</li>
                                    <li>Week 12 : 22/11/2019 - DOM</li>
                                    <li>Week 13 : 28/11/2019 - Prototype & Event</li>
                                    <li>Week 13 : 29/11/2019 - Ajax & XML & JSON</li>
                                    <li>Week 14 : 05/12/2019 - Ajax & XML & JSON</li>
                                    <li>Week 14 : 06/12/2019 - Web Services</li>
                                    <li>Week 15 : 12/12/2019 - Final Exam</li>
                                    <li>Week 15 : 13/12/2019 - Final Exam</li>
                                    <li>Week 16 : 19/12/2019 - Team Project Presentation</li>
                                    <li>Week 16 : 20/12/2019 - Team Project Presentation</li>
                                </ul>   
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title="Team Project">
                            <div className="content">
                                <ul>
                                    <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/project/project.html"><li>Team project</li></a>
                                </ul>   
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title = "Team Project Group">
                            <div className="content">
                                <ul>
                                    <li>Class 23497</li>
                                        <ul>
                                            <li><strong>박서연</strong>, 이효원, 정희재, 김재현, 모지환, 황예찬</li>
                                            <li><strong>이종민</strong>, 박준영, 박진혁, 송현수, 엄세진, 이준섭</li>
                                            <li><strong>김소현</strong>, 임소윤, 이정인, 강가원, 안예지</li>
                                            <li><strong>이민혁</strong>, 백승민, 김유현,<strong>Ana Carolina Cardoso</strong>, Zhou Xueyi, Frederik Bonde</li>
                                            <li><strong>양재우</strong>, 주한새, 강은호, 권순범, 김하영, 안한서</li>
                                            <li><strong>위준범</strong>, 배진우, 박재선, 박성수, 최준호</li>
                                            <li><strong>박재용</strong>, 김동규, 이세명, 오승기, 김덕영</li>
                                            <li><strong>고동현</strong>, 김동현, 김두호, 왕종휘, 김예진, 문수림</li>
                                            <li><strong>성태훈</strong>, 박예찬, 이무경, 장윤호, 심유빈</li>
                                            <li><strong>최웅순</strong>, 김태인, 이재윤, 김은영, 김민지, 고영준</li>
                                            <li><strong>윤규민</strong>, 박제현, 임정현, 윤지인, 이수종</li>
                                        </ul>
                                    <li>Class 24465</li>
                                        <ul>
                                            <li><strong>유영민</strong>, 강민제, 박연희, 이효원, 이정규</li>
                                            <li><strong>문현준</strong>, Tsoy Sergey, Shu Zhiwen, XIANG FANGSONG, 김태웅, 김세훈</li>
                                            <li><strong>박예림</strong>, 사은수, 이지선, 송용호, 권태형, 윤성주</li>
                                            <li><strong>박제균</strong>, 장주섭, 강은지, 정은지, 정은지</li>
                                            <li><strong>장윤지</strong>, 김종훈, 이해석, 이원석, 이준기</li>
                                            <li><strong>한동연</strong>, 안요한, 김민재, 석예림, 박재현, 김서권</li>
                                            <li><strong>김규진</strong>, 김승호, 김용준, 김우정, 김재훈</li>
                                            <li><strong>강동완</strong>, 김남호, 현병욱, 이진태, 김정우</li>
                                        </ul>    
                                </ul>   
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title="Assessments">
                            <div className="content">
                                <ul>
                                    <li>Attendance (10%)</li>
                                    <li>Midterm Exam (30%)</li>
                                    <li>Final Exam (30%)</li>
                                    <li>Team Project (30%)</li>
                                </ul>
                            </div>
                        </ToggleBox>
                    </div>
                    :null
                }

                {
                    this.state.slides === true?
                    <div className = "Slides">
                        <ToggleBox title="Lecture Slides">
                            <div className="content">
                                <ul>
                                    <li>No.0 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/00-introduction.html">Introduction</a></li>
                                    <li>No.1 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/01-www.html">The Internet & World Wide Web</a></li>
                                    <li>No.2 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/02-html.html">Basic HTML</a></li>
                                    <li>No.3 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/03-css.html">CSS for Styling</a></li>
                                    <li>No.4 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/04-layout.html">Page Layout</a></li>
                                    <li>No.5 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/05-PHP.html">PHP</a></li>
                                    <li>No.6 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/06-forms.html">Forms</a></li>
                                    <li>No.7 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/07-sql.html">Relational Database & SQL [DBs]</a></li>
                                    <li>No.8 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/08-javascript.html">JavaScript</a></li>
                                    <li>No.9 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/09-dom.html">Document Object Model (DOM)</a></li>
                                    <li>No.10 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/10-prototype.html">Prototype</a></li>
                                    <li>No.11 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/11-events.html">Events</a></li>
                                    <li>No.12 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/12-ajaxXmlJson.html">Ajax, XML, JSON</a></li>
                                    <li>No.13 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/13-webServices.html">Web Services</a></li>
                                    <li>No.14 : <a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/14-scriptaculous.html">Scriptaculous</a></li>     
                                </ul>
                            </div>
                        </ToggleBox>
                        <br />
                        <ToggleBox title = "Labs">
                            <div className = "content">
                                <ul>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab0-introduction.html">Introduction - Week 3</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab1-aboutme(HTML).html">About Me (HTML) - Week 4</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab2-aboutme(CSS).html">CSS - Week 5</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab3-favorite.html">CSS Design & Layout - Week 6</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab4-movieReview.html">Movie Review (HTML, CSS, Layout)- Week 7</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab5-musicLibrary.html">Basic PHP - Week 9</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab6-gradeStore.html">Forms - Week 10</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab7-SQL.html">SQL - Week 11</a></li>
                                    <li><a href = "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab8-pimpMyText.html">JavaScript - Week 12</a></li>
                                </ul>
                            </div>
                        </ToggleBox>
                    </div>
                    :null
                }          
                
                
            </div>
		);
	}
}

export default Cse326;