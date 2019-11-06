import React, { Component } from 'react';


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
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input placeholder="Title" ref={node => this.brdtitle = node} /><br />
                    <input placeholder="Name" ref={node => this.brdwriter = node} /><br />
                    <input placeholder="Content" ref={node => this.brdcontent = node}/><br />
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }
}

export default BoardForm;