import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import styled from "styled-components";


import HomeIcon from '@material-ui/icons/Home';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PeopleIcon from '@material-ui/icons/People';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


import Popup from './Login';
import "../style/button.css";


const styles = {
    root: {
        position:'fixed',
        flexGrow: 1,
        float: 'left',
        marginLeft: 0,
    },
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
            window : 'd',
            showPopup: false,
        };
    };
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    onClick = (name) => {
        this.setState({window: name});
    };
    render() {
    const { classes } = this.props;
    return (
        <div>
            <div>
            <h1>{this.state.window}</h1>
            <button className="loginbutton" onClick={this.togglePopup.bind(this)}>login</button>
            {this.state.showPopup ? 
            <Popup
                text='Close Me'
                closePopup={this.togglePopup.bind(this)}
            /> : null
            }
            </div>
            
            <div className={classes.root}>
                <Container style={{paddingLeft: '30px', marginTop: '50px', marginLeft: '0px'}}>
                        <Link component={RouterLink} to="/" >
                            <div className = "icon">
                                <Tooltip  placement= "right"title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        Home
                                    </Typography>
                                </React.Fragment>}>
                                    <IconButton onClick={(e) => this.onClick('　',e)}>
                                        <HomeIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Link>
                        
                        <Link component={RouterLink} to="/notice" >
                            <div className = "icon">
                                <Tooltip  placement= "right"title={
                                <React.Fragment>
                                    <Typography color="inherit">
                                        Notice
                                    </Typography>
                                </React.Fragment>}>
                                    <IconButton onClick={(e) => this.onClick('notice',e)}>
                                        <NotificationImportantIcon />
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
        </div>
        );
    }
}
    


export default withStyles(styles)(AppShell);
