import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import '../style/Appshell.css';


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    },
};

class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle: false
        };
    }
   handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render() {
    const { classes } = this.props;
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                </AppBar>
                <Drawer 
                    open={this.state.toggle}
                    variant="permanent"
                    anchor="left">
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/">
                            Home
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/notice">
                            NOTICE
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/members">
                            MEMBERS
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/research">
                            RESEARCH
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/publication">
                            PUBLICATION
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/course">
                            COURSES
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/gallery">
                            GALLERY
                        </Link>
                    </MenuItem>

                </Drawer>
            </div>
            <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                {React.cloneElement(this.props.children)}
            </div>
        </div>
        );
    }
}
    
export default withStyles(styles)(AppShell);