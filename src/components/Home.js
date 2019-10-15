import React from 'react';
import 'react-viewer/dist/index.css';
import '../style/homeimage.css';

const pics = [
    process.env.PUBLIC_URL + '/img/1.png',
    process.env.PUBLIC_URL + '/img/2.png',
    process.env.PUBLIC_URL + '/img/3.png',
  ];
  
  class Home extends React.Component {
    render() {
      return (
        <div>
          <h1>This is home</h1>
        </div>
      );
    }
  }

export default Home;