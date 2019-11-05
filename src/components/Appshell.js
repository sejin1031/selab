import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import styled from "styled-components";

import "./AppShell.scss"

const styles = {
    root: {
        position:'fixed',
        flexGrow: 1,
        float: 'left',
        marginLeft: 10,
    },

};

class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <div className={classes.root}>
                <Container style={{paddingLeft: '5px', marginTop: '50px', marginLeft: '0px'}}>
                        <Link component={RouterLink} to="/" style={{textDecoration:'none',color:'white'}}>
                            <div className="menuItem">
                                <div className="bigMenuItem">HOME</div>
                            </div>
                        </Link>
                        
                        <Link component={RouterLink} to="/notice" style={{textDecoration:'none',color:'white'}}>
                            <div className="menuItem">
                                <div className="bigMenuItem">NOTICE</div>
                            </div>
                        </Link>
                        <Link component={RouterLink} to="/members" style={{textDecoration:'none',color:'white'}}>
                            <div className="menuItem">
                                <div className="bigMenuItem">MEMBER</div>
                            </div>                        
                        </Link>
                        <Link component={RouterLink} to="/research" style={{textDecoration:'none',color:'white'}}>
                            <div className="menuItem">
                                <div className="bigMenuItem">RESEARCH</div>
                            </div>                        
                        </Link>
                        <Link component={RouterLink} to="/publication" style={{textDecoration:'none',color:'white'}}>
                            <div className="menuItem">
                                <div className="bigMenuItem">PUBLICATION</div>
                            </div>                        
                        </Link>
                        <Link component={RouterLink} to="/course" style={{textDecoration:'none',color:'white'}} >
                            <div className="menuItem">
                                <div className="bigMenuItem">COURSE</div>
                            </div>                        
                        </Link>
                        <Link component={RouterLink} to="/gallery" style={{textDecoration:'none',color:'white'}}>
                            <div className="menuItem">
                                <div className="bigMenuItem">GALLERY</div>
                            </div>                        
                        </Link>
                    </Container>
                </div>
        </div>
        );
    }
}
    


export default withStyles(styles)(AppShell);
