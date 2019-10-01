import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Menu, MenuItem, Button } from '@material-ui/core';


class Intern extends React.Component {
    render() {
        return (
            <div>
                <Button>
                    <Link component={RouterLink} to="/members/intern">
                            Intern
                    </Link>
                </Button>
                <Button>
                    <Link component={RouterLink} to="/members/professor">
                            professor
                    </Link>
                </Button>

                <Card>
                    <CardContent>
                        <h1>hasdfasdeelo</h1>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Intern;