import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Members from '../components/members/Members';
import Alumni from '../components/members/Alumni';
import ME from '../components/members/ME';
import Professor from '../components/members/Professor';
import Intern from '../components/members/Intern';
import MemberMenu from '../components/members/MemberMenu'

export default class MemberRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          route: this.props.match.url
        };
      }
    render() {
        return (
            <BrowserRouter>
            <>
            <MemberMenu/>
              <Switch>
                <Route exact path={this.state.route} component={Members}/>
                <Route path={this.state.route + "/alumni"} component={Alumni} />
                <Route path={this.state.route + "/intern"} component={Intern} />
                <Route path={this.state.route + "/me"} component={ME} />
                <Route path={this.state.route + "/phd"} component={Members} />
                <Route path={this.state.route + "/professor"} component={Professor} />
              </Switch>
            </>
            </BrowserRouter>
        )
    }
}
