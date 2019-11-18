import React from 'react';
import BoardForm from './BoardFoam';
import BoardItem from './BoardItem';
import WritePopup from './WritePopup';
import './noticestyle.css'

/*
    component files.
*/

class Notice extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false,
        maxNo: 4,
        boards: [
            {
                brdno: 1,
                brdwriter: 'Scott lee',
                brdtitle: '공지사항',
                brdcontent: '오늘 수업 없음',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'hyun soo',
                brdtitle: '게시판',
                brdcontent: '이거만들라면 db랑 서버랑 연동시켜야함',
                brddate: new Date()
            },
            {
                brdno: 3,
                brdwriter: 'umsejin',
                brdtitle: 'web app master',
                brdcontent: '그는 금요일에 안해온 놈들의 뚝배기를 깨버릴것이다',
                brddate: new Date()
            }
        ],
         selectedBoard:{}
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
   

  render() {
  	const { boards, selectedBoard } = this.state;
    return (
      <div className='app'>
        <img src= {require("./notice.png")} id = 'nimg'/>
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
              {
                  boards.map(row =>
                      (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                  )
              }
            </tbody>
          </table>
        <br/>
        {this.props.auth && <button onClick={this.togglePopup.bind(this)}>글쓰기</button>}
        {this.state.showPopup ? 
            <WritePopup text='Close Me' closePopup={this.togglePopup.bind(this)}/>
            : null
        }
      </div>
      );
    }
  };

export default Notice;