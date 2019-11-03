import React, { Component } from 'react';
import Content from './Content';
import "./research.css";
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import logo4 from './logo4.png'
import logo5 from './logo5.png'

class Research extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        mode:'state1',
        content1:[
          {id:1, desc: 'Semantic web'},
          {id:2, desc: 'Effective Access Control for Web Data'},
          {id:3, desc: 'Vulnerability Analysis and Detection for HTML5'},
          {id:4, desc: 'JavaScript and Hybrid Application'}
        ],
        content2:[
          {id:1, desc: 'Formal Specification, Validation, and Verification'},
          {id:2, desc: 'Model checking, Theorem Proving'},
          {id:3, desc: 'Ontology Reasoning, Constraint Solving'}
        ],
        content3:[
          {id:1, desc: 'Requirement Analysis, Validation and Conflict Detection'},
          {id:2, desc: 'Non-Functional Requirements Analysis and Prediction'},
          {id:3, desc: 'Product Line and Software Product Line'},
          {id:4, desc: 'Requirement Modeling with Extended Mind Map'}
        ],
        content4:[
          {id:1, desc: 'Real-Time Software and Process Modeling'},
          {id:2, desc: 'Real-Time Software Specification and Verification'},
          {id:3, desc: 'Real-Time Software Integration and Migration Control'}
        ],
        content5:[
          {id:1, desc: 'XML and XML DB, Visualization of XML-Schema'},
          {id:2, desc: 'Ontology and RDF Store'},
          {id:3, desc: 'Semistructured Data Integration and Migration'},
          {id:4, desc: 'Optimization of X-Query'},
          {id:5, desc: 'Consistency Verification for Semistructured Data Manipulation'},
          {id:6, desc: 'Domain Specific Extension to XML & Data Translation from RDBMS to XML DBMS'}
        ]

      }
    }
    render() {
        var _data = null;
        if(this.state.mode === 'state1'){
          _data = this.state.content1;
        }
        else if(this.state.mode === 'state2'){
          _data = this.state.content2;
        }
        else if(this.state.mode === 'state3'){
          _data = this.state.content3;
        }
        else if(this.state.mode === 'state4'){
          _data = this.state.content4;
        }
        else if(this.state.mode === 'state5'){
          _data = this.state.content5;
        }
        return (
          <div>
          <a  className = 'img1' href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'state1'
            });
          }.bind(this)}><img src = {logo1} /></a>
          <a className = 'img2' href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'state2'
            });
          }.bind(this)}><img src = {logo2} /></a>
          <a className = 'img3' href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'state3'
            });
          }.bind(this)}><img src = {logo3} /></a>
          <a className = 'img4' href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'state4'
            });
          }.bind(this)}><img src = {logo4} /></a>
          <a className = 'img5' href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'state5'
            });
          }.bind(this)}><img src = {logo5} /></a>

          <Content data = {_data}></Content>
          </div>

        );
    }
}

export default Research;
