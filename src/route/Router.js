import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import AppShell from '../components/Appshell';
import Research from '../components/research/Research';
import Home from '../components/home/Home';
import MemberMenu from '../components/members/MemberMenu';
import Notice from '../components/notice/Notice';
import Publication from '../components/publications/Publications';
import Course from '../components/courses/Courses';
import Gallerys from '../components/gallery/Gallery';
import Cse326 from '../components/courses/CSE326/Cse326';
import Slides from '../components/courses/CSE326/slides';
import Footer from '../components/footer/Footer';

import styled from 'styled-components';

import '../style/app.css';

const SubContent = styled.div`
    margin-left : 130px;
    margin-top : 5vh;
    margin-bottom: 3vh;
    padding : 50px
    height : 75vh;
    overflow : auto;
    `;

class Router extends Component {
   constructor(props){
     super(props);
     
     this.state = {
       isLoggedin : true,
       id : 'scott',
       auth : true,
     }
     this.loginHandler = this.loginHandler.bind(this);
     this.logoutHandler = this.logoutHandler.bind(this);
   }
   loginHandler(id,auth){
     this.setState({isLoggedin : true,id:id,auth:auth})
   };
   logoutHandler(){
    this.setState({isLoggedin : false,id:'',auth:false})
   }

   
  render() {
    return (
      <BrowserRouter basename="/">
        <>
        <AppShell/>
      
          <SubContent>
          <Switch>
            <Route exact path="/" component={() => <Home 
            isLoggedin={this.state.isLoggedin}
            loginHandler={this.loginStateHandler}
            logoutHandler={this.logoutHandler}
            id = {this.state.id}
            /> }/>
            <Route exact path="/notice" component={()=> <Notice
            auth={this.state.auth} id={this.state.id}/>}/>
            <Route exact path="/members" component={MemberMenu} />
            <Route exact path="/research" component={Research}/>
            <Route exact path="/publication" component={Publication}/>

            <Route exact path="/course/cse326" component={Cse326}/>
            <Route exact path="/course/slide" component={Slides}/>
            <Route exact path="/course" component={Course}/>

            <Route exact path="/gallery" component={Gallerys}/>

            
          </Switch>
          </SubContent>
          <Footer/>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;