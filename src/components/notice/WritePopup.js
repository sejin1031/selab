import React, { Component } from 'react'
import BoardForm from './BoardFoam';
import BoardItem from './BoardItem';
import './noticestyle.css'


class WritePopup extends React.Component {
    constructor() {
        super();
        this.state = {
            maxNo: 4,
            boards: [],
           selectedBoard:{}
        };
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
        <div className='npopup'>
            <div className='popup_inner'>
                <h1>WRITE</h1>
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
                <button onClick={this.props.closePopup}>close me</button>
            </div>
        </div>
        );
    }
}

export default WritePopup;