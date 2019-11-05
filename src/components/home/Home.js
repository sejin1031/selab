import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import axios from 'axios';


import NoticeTable from './NoticeTable';
import 'react-viewer/dist/index.css';
import './homeimage.scss';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      host : '',
    }
  }

  componentDidMount() {
    this._getHost();
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({ host : res.data.host })
  }

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