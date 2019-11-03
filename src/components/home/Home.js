import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import NoticeTable from './NoticeTable';
import 'react-viewer/dist/index.css';
import './homeimage.scss';

class Home extends React.Component {
    render() {
      
      return (
        <div className="main">
          <img className= "logo" src={require("../selab_logo.png")}/>
          
          <div className="content">
            <div className="course">
              <div className="button">
                <Link component={RouterLink} to="/course/cse326">
                CSE326 
                </Link>
              </div>
            </div>
          <div className="notice"><NoticeTable/></div>
          </div>
        </div>
      );
    }
  }

export default Home;