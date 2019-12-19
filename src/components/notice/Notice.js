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
        delNo: -1,
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

    deleteNotice(date){
      this.setState({delNo: date.id})
      setTimeout(()=>this.deldatabase(),100);
      setTimeout(()=>this.noticeLoad(),200);
    }

    deldatabase = async() => {
      var flag = await axios('/notice/delete',{
        method : 'POST',
        data : {id : this.state.delNo},
        headers : new Headers()
      });
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
                  {this.props.auth === "T" ?<th width="30">Delete</th>:""}
              </tr>
            </thead>
            <tbody>

              {this.state.test.map(data =>
              <tr>
                <td onClick={()=>this.noPopHandler(data)}>{data.id}</td>
                <td onClick={()=>this.noPopHandler(data)}>{data.title}</td>
                <td onClick={()=>this.noPopHandler(data)}>{data.writer}</td>
                <td onClick={()=>this.noPopHandler(data)}>{data.date}</td>
                {this.props.auth === "T" ?<td onClick={()=>this.deleteNotice(data)}>X</td>:""}
              </tr>)}
            </tbody>
          </table>
        <br/>
        {this.props.auth === "T" ?
              <button className = "nbutton" onClick={this.togglePopup.bind(this)}>글쓰기</button>
              :""
        }
        {this.state.showPopup ?
            <WritePopup text='Close Me' closePopup={this.togglePopup.bind(this)} noticeLoad={this.noticeLoad}/>
            : null
        }
      </div>
      );
    }
  };

export default Notice;
