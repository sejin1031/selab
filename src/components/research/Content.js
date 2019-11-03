import React, { Component } from 'react';


class Content extends React.Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
          lists.push(<li key ={data[i].id}>{data[i].desc}</li>);
          i = i + 1;
        }
        return (
          <div className = 'Content'>
            <ul>
              {lists}
            </ul>
          </div>
        );
    }
}

export default Content;
