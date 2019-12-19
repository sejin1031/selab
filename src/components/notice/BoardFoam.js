import React, { Component } from 'react';

import axios from 'axios';


var moment = require('moment');

class BoardForm extends Component {
    state={}

    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            this.brdtitle.value = "";
            this.brdwriter.value = "";  
            this.brdcontent.value= "";      
            return true;
        }
        
        this.brdtitle.value = selectedBoard.brdtitle;
        this.brdwriter.value = selectedBoard.brdwriter;
        this.brdcontent.value = selectedBoard.brdcontent;    
        this.noticeSave = this.noticeSave.bind(this);    
        return true;
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            brdwriter: this.brdwriter.value,
            brdtitle: this.brdtitle.value,
            brdcontent: this.brdcontent.value
        }
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }        
        this.props.onSaveData(data);
    }

    noticeSave= async() => {
        var flag = await axios('/notice/save',{
            method : 'POST',
            data : {title : this.brdtitle.value,
                    writer : this.brdwriter.value,
                    content : this.brdcontent.value,
                    date : moment(new Date()).format("YYYY.MM.DD")
                },
          
                headers : new Headers()
        })
        alert("save")
        this.props.noticeLoad();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type = "text" placeholder="Title" size = '40' ref={node => this.brdtitle = node} /><br />
                    <input type = "text" placeholder="Name" ref={node => this.brdwriter = node} /><br />
                    <textarea className= "ntext" placeholder="글을 입력하세요." rows = '10' cols = '40' ref={node => this.brdcontent = node}></textarea><br />
                    <button className = "nbutton" onClick = {this.noticeSave}>Save</button><br/>
                </div>
            </form>
        );
    }
}

export default BoardForm;