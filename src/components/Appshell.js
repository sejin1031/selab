import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


import styled from "styled-components";

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PeopleIcon from '@material-ui/icons/People';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import "../style/button.css"


const styles = {
    root: {
        flexGrow: 1,
        float: 'left',
        marginLeft: 0,
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
                <Container style={{padding: 0, marginTop: '120px'}}>
                        <Link component={RouterLink} to="/">
                        <MenuItem onClick={this.handleDrawerToggle}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                        </MenuItem>
                        </Link>
                    
                        <Link component={RouterLink} to="/members">
                        <MenuItem onClick={this.handleDrawerToggle}>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                            <Link component={RouterLink} to="/members/intern">
                            </Link>
                        </MenuItem>
                        </Link>
                    
                        <Link component={RouterLink} to="/research">
                        <MenuItem onClick={this.handleDrawerToggle}>
                                <ListItemIcon>
                                    <ImportContactsIcon  />
                                </ListItemIcon>
                        </MenuItem>
                        </Link>
                        <Link component={RouterLink} to="/publication">
                        <MenuItem onClick={this.handleDrawerToggle}>
                                <ListItemIcon>
                                    <DescriptionIcon />
                                </ListItemIcon>
                        </MenuItem>
                        </Link>
                        <Link component={RouterLink} to="/course">
                        <MenuItem onClick={this.handleDrawerToggle}>
                                <ListItemIcon>
                                    <LibraryBooksIcon />
                                </ListItemIcon>
                        </MenuItem>
                        </Link>
                        <Link component={RouterLink} to="/gallery">
                        <MenuItem onClick={this.handleDrawerToggle}>
                                <ListItemIcon>
                                    <CameraAltIcon />
                                </ListItemIcon>
                        </MenuItem>
                        </Link>
                        </Container>
            </div>
            <div id="content" style={{margin: 'auto', marginTop: '20px', float:'left'}}>
                {React.cloneElement(this.props.children)}
            </div>
        </div>
        );
    }
}
    


export default withStyles(styles)(AppShell);
