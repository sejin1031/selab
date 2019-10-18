import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import styled from "styled-components";


import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
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
        position:'fixed',
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
            window : 'home'
        };
    };
    onClick = (name) => {
        this.setState({window: name});
    };
    render() {
    const { classes } = this.props;
    return (
        <div>
            <h1>{this.state.window}</h1>
            <div className={classes.root}>
                <Container style={{paddingLeft: '30px', marginTop: '120px', marginLeft: '0px'}}>
                        <Link component={RouterLink} to="/" >
                            <div classNmae = "icon">
                                <Tooltip  placement= "right"title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        Home
                                    </Typography>
                                </React.Fragment>}>
                                    <IconButton onClick={(e) => this.onClick('home',e)}>
                                        <HomeIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            </Link>
                        <Link component={RouterLink} to="/members">
                            <div className = "icon">
                                <Tooltip placement="right" title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        Memebers
                                    </Typography>
                                </React.Fragment>}>
                                    <IconButton onClick={(e) => this.onClick('Members',e)}>
                                        <PeopleIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Link>
                    
                        <Link component={RouterLink} to="/research">
                            <div class = "icon">
                            <Tooltip placement="right" title={
                            <React.Fragment>
                                <Typography color="inherit">
                                    Research
                                </Typography>
                            </React.Fragment>}>
                            <IconButton onClick={(e) => this.onClick('Research',e)}>
                                <ImportContactsIcon  />
                            </IconButton>
                            </Tooltip>
                            </div>
                        </Link>

                        <Link component={RouterLink} to="/publication">
                            <div class = "icon">
                                <Tooltip placement="right" title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        publication
                                    </Typography>
                                </React.Fragment>}>
                            <IconButton onClick={(e) => this.onClick('Publication',e)}>
                                <DescriptionIcon />
                            </IconButton>
                            </Tooltip>
                            </div>
                        </Link>

                        <Link component={RouterLink} to="/course">  
                            <div class = "icon">
                                <Tooltip placement="right" title={
                                    <React.Fragment>
                                        <Typography color="inherit">
                                            Course
                                        </Typography>
                                    </React.Fragment>}>
                                    <IconButton onClick={(e) => this.onClick('Course',e)}>
                                            <LibraryBooksIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>

                        </Link>
                        <Link component={RouterLink} to="/gallery">
                            <div class = "icon">

                            <Tooltip placement="right" title={
                            <React.Fragment>
                                <Typography color="inherit">
                                    Gallery
                                </Typography>
                            </React.Fragment>}>
                                <IconButton onClick={(e) => this.onClick('Gallery',e)}>
                                    <CameraAltIcon />
                                </IconButton>
                            </Tooltip>
                            </div>       
                        </Link>
                    </Container>
                </div>
            <div id="content" style={{marginLeft :'10%', marginTop: '5%', float:'left'}}>
                {React.cloneElement(this.props.children)}
            </div>
        </div>
        );
    }
}
    


export default withStyles(styles)(AppShell);
