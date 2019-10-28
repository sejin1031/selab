import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import AppShell from '../components/Appshell';
import Members from '../components/members/Members';
import Research from '../components/research/Research';
import Home from '../components/Home';
import Notice from '../components/notice/Notice';
import Publication from '../components/publications/Publications';
import Course from '../components/courses/Courses';
import Gallerys from '../components/gallery/Gallery';

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <Link to="/">
              <AppShell/>
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home/>
              )}
            />
            <Route
              exact
              path="/notice"
              component={() => (
                <Notice/>
              )}
              />
              <Route
              exact
              path="/members"
              component={() => (
                <Members/>
              )}
              />
              <Route
              exact
              path="/research"
              component={() => (
                <Research/>
              )}
              />
              <Route
              exact
              path="/publication"
              component={() => (
                <Publication/>
              )}
              />
              <Route
              exact
              path="/course"
              component={() => (
                <Course/>
              )}
              />
              <Route
              exact
              path="/gallery"
              component={() => (
                <Gallerys/>
              )}
              />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;