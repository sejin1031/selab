import React from 'react';
import BoardForm from './BoardFoam';
import BoardItem from './BoardItem';
import WritePopup from './WritePopup';
import './noticestyle.css'

import axios from 'axios';


class Notice extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showPopup: false,
        maxNo: 4,
        test : [],
         selectedBoard:{}
      };
      this.noticeLoad();
    }
    noticeLoad = async() => {
      var flag = await axios('/notice',{
          method : 'get',
          headers : new Headers()
      })
      this.setState({
        test : flag.data
      })
    }

    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
      this.noticeLoad();
    }
   

  render() {
    const { selectedBoard } = this.state;
    return (
      <div className='app'>
        {/*<div>test code id={this.props.id}</div>*/}
        <img className="bell" src= {require("./notice.png")} id = 'nimg'/>

        <h1 id ="h1">Notice</h1>
        
          <table className='table'>
            <thead>
              <tr align="center">
                  <th width="50">No.</th>
                  <th width="300">Title</th>
                  <th width="100">Name</th>
                  <th width="300">Content</th>
                  <th width="150">Date</th>
              </tr>
            </thead>
            <tbody>
              
              {this.state.test.map(data => <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.writer}</td>
                <td>{data.content}</td>
                <td>{data.date}</td>
              </tr>)}
            </tbody>
          </table>
        <br/>
        {/* {this.props.auth} */}
        {<button onClick={this.togglePopup.bind(this)}>글쓰기</button>}
        {this.state.showPopup ? 
            <WritePopup text='Close Me' closePopup={this.togglePopup.bind(this)}/>
            : null
        }
      </div>
      );
    }
  };

export default Notice;