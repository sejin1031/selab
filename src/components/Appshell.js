import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PeopleIcon from '@material-ui/icons/People';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { sizing } from '@material-ui/system';


const styles = {
    root: {
        flexGrow: 1,
    },
    appBar:{
        background: 'linear-gradient(45deg, darkblue 60%, skyblue 30%)',
        position : 'relative',
    },
    // menuButton: {
    //     marginRight: 'auto'
    // },
    backButton: {
        marginLeft: 'auto'
    },
    title: {
        marginRight:'auto'
    },
    iconItem: {
        background: 'linear-gradient(45deg, white 80%, darkblue 5%)',
    },
    logo: {
        width : '30%'
    },

    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between'
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
                <AppBar height="10%" className={classes.appBar} position="static" >
                    <Toolbar className={classes.toolbar}>
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon/> 
                        </IconButton>
                        <Typography variant="h3" marginLeft="auto">
                            　ㅇㅇ
                        </Typography>
                        <Link component={RouterLink} to="/">
                            <img src='/logo.png' alt='logo' />
                        </Link>
                    </Toolbar>
                </AppBar>
                <Drawer 
                    open={this.state.toggle}
                    anchor="left">
                    <Toolbar className={classes.iconItem} onClick={!this.handleDrawerToggle}>
                        <img src='../../hyulogo.png' alt='logo' />
                        <IconButton className={classes.backButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <Link component={RouterLink} to="/">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            Home
                    </MenuItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to="/notice">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <NotificationImportantIcon />
                            </ListItemIcon>
                            NOTICE
                    </MenuItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to="/members">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                        <Link component={RouterLink} to="/members/intern">
                            MEMBERS
                        </Link>
                    </MenuItem>
                    </Link>
                   
                    <Divider />
                    <Link component={RouterLink} to="/research">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <ImportContactsIcon  />
                            </ListItemIcon>
                            RESEARCH
                    </MenuItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to="/publication">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            PUBLICATION
                    </MenuItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to="/course">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            COURSES
                    </MenuItem>
                    </Link>
                    <Divider />
                    <Link component={RouterLink} to="/gallery">
                    <MenuItem onClick={this.handleDrawerToggle}>
                            <ListItemIcon>
                                <CameraAltIcon />
                            </ListItemIcon>
                            GALLERY
                    </MenuItem>
                    </Link>
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
