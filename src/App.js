import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './components/Appshell';
import Members from './components/Members';
import Research from './components/Research';
import Home from './components/Home';
import Notice from './components/Notice';
import Publication from './components/Publications';
import Course from './components/Courses';
import Gallerys from './components/Gallery';

import './style/app.css';



class App extends React.Component {
  render() {
    return (
      <Router>
        
        <AppShell>
          <div style={{float:'left', height:'900px'}} className="">
            <Route exact path="/" component={Home}/>
            <Route exact path="/notice" component={Notice}/>
            <Route exact path="/members" component={Members}/>
            <Route exact path="/research" component={Research}/>
            <Route exact path="/publication" component={Publication}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/gallery" component={Gallerys}/>
            <Route exact path="/members" component={Members}/>
          </div>
        </AppShell>
      </Router>
    );
  }
}



export default App;


