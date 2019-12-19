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
        popup: [],
        test : [],
         selectedBoard:{}
      };
      this.noPopHandler = this.noPopHandler.bind(this);
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

    noPopHandler(data){
      this.setState({popup: data})
    }


  render() {
    const { selectedBoard } = this.state;
    return (
      <div className='app'>
        {this.state.popup.length == 0 ?""
        :<BoardItem
          popup={this.state.popup}
          noPopHandler={this.noPopHandler}
        />
        }
        

        <h1 id ="h1">Notice</h1>

          <table className='table'>
            <thead>
              <tr align="center">
                  <th width="50">No.</th>
                  <th width="500">Title</th>
                  <th width="300">Name</th>
                  <th width="200">Date</th>
              </tr>
            </thead>
            <tbody>

              {this.state.test.map(data =>
              <tr onClick={()=>this.noPopHandler(data)}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.writer}</td>
                <td>{data.date}</td>
              </tr>)}
            </tbody>
          </table>
        <br/>
        {/*this.props.auth === "T" ?*/}
              {<button className = "nbutton" onClick={this.togglePopup.bind(this)}>글쓰기</button>}
              {/*:""*/
        }
        {this.state.showPopup ?
            <WritePopup text='Close Me' closePopup={this.togglePopup.bind(this)}/>
            : null
        }
      </div>
      );
    }
  };

export default Notice;
