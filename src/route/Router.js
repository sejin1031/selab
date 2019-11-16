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
     this.loginStateHandler = this.loginStateHandler.bind(this);
     this.idHandler = this.idHandler.bind(this);
     this.authHandler = this.authHandler.bind(this);
     this.state = {
       isLoggedin : false,
       id : '',
       auth : false,
     }
   }
   loginStateHandler(){
     this.setState({isLoggedin : !this.state.isLoggedin})
   };
   idHandler(e){
     this.setState({id:e})
   };
   authHandler(){
     this.setState({auth : !this.state.auth})
   }
   
  render() {
    return (
      <BrowserRouter basename="/">
        <>
        <AppShell/>
          {this.state.isLoggedin && <div>{this.state.id}</div>}
          <SubContent>
          <Switch>
            <Route exact path="/" component={() => <Home isLoggedin={this.state.isLoggedin}
            loginHandler={this.loginStateHandler}
            idHandler = {this.idHandler}
            authHandler = {this.authHandler}
            /> }/>
            <Route exact path="/notice" component={Notice}/>
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