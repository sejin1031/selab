import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

const pics = [
    'https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
    'https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg',
    'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg',
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
        <div className="mask">
          <div className="pic-wrapper">
            <div className={`current pic ${move}`}>
              {this.state.index}
              <img src={pics[this.state.index]} alt="" />
            </div>
            <div className={`next pic ${move}`}>
              {this.state.next}
              <img src={pics[this.state.next]} alt="" />
            </div>
          </div>
        </div>
      );
    }
  }

export default Home;