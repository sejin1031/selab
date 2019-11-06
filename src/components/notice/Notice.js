import React from 'react';
import BoardForm from './BoardFoam';
import BoardItem from './BoardItem';

/*
    component files.
*/
class Notice extends React.Component {

    state = {
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
    }
    
    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
                selectedBoard: {}
            })            
        }
    }
    
    handleRemove = (brdno) => {
        this.setState({
            maxNo: this.state.maxNo-1,
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    
    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }
    
    render() {
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <h1>이거 나중에 아예 바꿀거 같음!!!</h1>
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="300">Content</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Notice;