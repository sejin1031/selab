import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import AppShell from '../components/Appshell';
import Members from '../components/members/Members';
import Research from '../components/research/Research';
import Home from '../components/home/Home';
import Notice from '../components/notice/Notice';
import Publication from '../components/publications/Publications';
import Course from '../components/courses/Courses';
import Gallerys from '../components/gallery/Gallery';
import Cse326 from '../components/courses/CSE326/Cse326';
import Slides from '../components/courses/CSE326/slides';

import styled from 'styled-components';

import '../style/app.css'

const SubContent = styled.div`
    margin-left : 130px;
    margin-top : 3vh;
    margin-bottom: 3vh;
    padding : 50px
    height : 75vh;
    overflow : scroll;
    `;

class Router extends Component {
   
  render() {
    return (
      <BrowserRouter basename="/">
        <>
        <AppShell/>
          <SubContent>
          <Switch>
            <Route exact path="/" component={() => (<Home/>)}/>
            <Route exact path="/notice" component={() => ( <Notice/> )}/>
            <Route exact path="/members" component={() => ( <Members/> )} />
            <Route exact path="/research" component={() => ( <Research/> )}/>
            <Route exact path="/publication" component={() => ( <Publication/>)}/>

            <Route exact path="/course/cse326" component={() => ( <Cse326/> )}/>
            <Route exact path="/course/slide" component={() => ( <Slides/> )}/>
            <Route exact path="/course" component={() => ( <Course/> )}/>

            <Route exact path="/gallery" component={() => ( <Gallerys/> )}/>
          </Switch>
          </SubContent>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;