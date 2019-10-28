import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

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

class Course extends React.Component {
    render() {
        return (
            <div>
                <AppBar className={styles.appBar} position="static">
                    <Toolbar className={styles.toolbar}>
                        <MenuItem className={styles.hyulogo}>
                            <Link component={RouterLink} to="/course">
                                <h1>Course</h1>
                            </Link>
                        </MenuItem>
                        <MenuItem className={styles.hyulogo}>
                            <Link component={RouterLink} to="/course">
                                <h1>Course</h1>
                            </Link>
                        </MenuItem>
                        <MenuItem className={styles.hyulogo}>
                            <Link component={RouterLink} to="/notice">
                                <h1>Course3</h1>
                            </Link>
                        </MenuItem>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Course;