import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Menu, MenuItem, Button } from '@material-ui/core';
import Intern from './members/Intern';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import Professor from './members/Professor';


class Members extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" component={Members}/>
                <Route exact path="/intern" component={Intern}/>
                <Button>
                    <Link component={RouterLink} to="/intern">
                            Intern
                    </Link>
                </Button>
                <Button>
                    <Link component={RouterLink} to="/members/professor">
                            professor
                    </Link>
                </Button>
            </div>
            </Router>
        );
    }
}

export default Members;