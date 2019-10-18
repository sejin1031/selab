import React from 'react';
import 'react-viewer/dist/index.css';
import '../style/homeimage.css';

class Home extends React.Component {
    render() {
      
      return (
        <div class="text">
          <img className= "logo" src={require("./selab_logo.png")}/>
        </div>
      );
    }
  }

export default Home;