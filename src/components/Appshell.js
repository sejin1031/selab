import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PeopleIcon from '@material-ui/icons/People';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import Home from './Home'



const styles = {
    root: {
        flexGrow: 1,
    },
    appBar:{
        background: 'linear-gradient(45deg, darkblue 60%, skyblue 30%)',
        position : 'relative',
    },
    menuButton: {
        marginRight: 'auto'
    },
    backButton: {
        marginLeft: 'auto'
    },
    iconItem: {
        background: 'linear-gradient(45deg, darkblue 60%, skyblue 30%)',
    },
    logo: {
        width : '30%'
    },
    hyulogo: {
        
        marginLeft:'auto'
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
                <AppBar className={classes.appBar} position="static">
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                        <MenuIcon/> 
                        <MenuItem></MenuItem>
                    </IconButton>
                    <MenuItem className={classes.hyulogo}>
                        <Link component={RouterLink} to="/">
                            <img src='/logo.png' alt='logo' />
                        </Link>
                    </MenuItem>
                </AppBar>
                <Drawer 
                    open={this.state.toggle}
                    anchor="left">
                    <MenuItem className={classes.iconItem}>
                        <img src='../../logo.png' alt='logo' />
                        <IconButton className={classes.backButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/">
                            Home
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <NotificationImportantIcon />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/notice">
                            NOTICE
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/members">
                            MEMBERS
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <ImportContactsIcon  />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/research">
                            RESEARCH
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/publication">
                            PUBLICATION
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/course">
                            COURSES
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <ListItemIcon>
                            <CameraAltIcon />
                        </ListItemIcon>
                        <Link component={RouterLink} to="/gallery">
                            GALLERY
                        </Link>
                    </MenuItem>
                    <Divider />
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
