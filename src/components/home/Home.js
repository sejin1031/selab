import React from 'react';
import 'react-viewer/dist/index.css';
import './homeimage.scss';

class Home extends React.Component {
    render() {
      
      return (
        <div className="main">
          <img className= "logo" src={require("../selab_logo.png")}/>
        </div>
      );
    }
  }

export default Home;