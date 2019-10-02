import React from 'react';
import 'react-viewer/dist/index.css';
import '../style/homeimage.css';

const pics = [
    process.env.PUBLIC_URL + '/img/1.png',
    process.env.PUBLIC_URL + '/img/2.png',
    process.env.PUBLIC_URL + '/img/3.png',
  ];
  
  class Home extends React.Component {
    constructor(props) {
      super(props);
      const idxStart = 0;
      this.state = {
        index: idxStart,
        next: this.getNextIndex(idxStart),
        move: false,
      };
    }


  
    getNextIndex(idx) {
      if (idx >= pics.length - 1) {
        return 0;
      }
      return idx + 1;
    }
  
    setIndexes(idx) {
      this.setState({
        index: idx,
        next: this.getNextIndex(idx)
      });
    }
  
    componentDidMount() {        
      setInterval(() => {
        // on
        this.setState({
          move: true
        });
        // off
        setTimeout(() => {
          this.setState({
            move: false
          });
          this.setIndexes(this.getNextIndex(this.state.index));
        }, 500); // same delay as in the css transition here
  
      }, 7000); // next slide delay
    }
    render() {
      const move = this.state.move ? 'move' : '';
      if (this.state.move) {
  
      }
      return (
        <div>
            <div className="homeimage">
                <div className="mask">
                <div className="pic-wrapper">
                    <div className={`current pic ${move}`}>
                    <img src={pics[this.state.index]} alt="" />
                    </div>

                </div>
                </div>                
            </div>
        </div>
      );
    }
  }

export default Home;