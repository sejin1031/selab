import React, { Component } from 'react';
import Content from './Content';
import "./research1.css";
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import logo4 from './logo4.png'
import logo5 from './logo5.png'

class Research extends React.Component {
    render() {
        return (
          <div>
              <img className = 'tab1' src = {logo1} alt = "logo1"/>
              <img className = 'tab2' src = {logo2} alt = "logo2"/>
              <img className = 'tab3' src = {logo3} alt = "logo3"/>
              <img className = 'tab4' src = {logo4} alt = "logo4"/>
              <img className = 'tab5' src = {logo5} alt = "logo5"/>
              <div className = 'plot1'>
                <h1>Web & Web security</h1>
                <ul>
                  <li>Semantic web</li>
                  <li>Effective Access Control for Web Data</li>
                  <li>Vulnerability Analysis and Detection for HTML5</li>
                  <li>JavaScript and Hybrid Application</li>
                </ul>
              </div>
              <div className = 'plot2'>
                <h1>Formal Engineering Methods</h1>
                <ul>
                  <li>Formal Specification, Validation, and Verification</li>
                  <li>Model checking, Theorem Proving</li>
                  <li>Ontology Reasoning, Constraint Solving</li>
                </ul>
              </div>
              <div className = 'plot3'>
                <h1>Requirement Engineering</h1>
                <ul>
                  <li>Requirement Analysis, Validation and Conflict Detection</li>
                  <li>Non-Functional Requirements Analysis and Prediction</li>
                  <li>Product Line and Software Product Line</li>
                  <li>Requirement Modeling with Extended Mind Map</li>
                </ul>
              </div>
              <div className = 'plot4'>
                <h1>Real-Time Software Engineering</h1>
                <ul>
                  <li>Real-Time Software and Process Modeling</li>
                  <li>Real-Time Software Specification and Verification</li>
                  <li>Real-Time Software Integration and Migration Control</li>
                </ul>
              </div>
              <div className = 'plot5'>
                <h1>Semi-structured Data</h1>
                <ul>
                  <li>XML and XML DB, Visualization of XML-Schema</li>
                  <li>Ontology and RDF Store</li>
                  <li>Semistructured Data Integration and Migration</li>
                  <li>Optimization of X-Query</li>
                  <li>Consistency Verification for Semistructured Data Manipulation</li>
                  <li>Domain Specific Extension to XML & Data Translation from<br/>RDBMS to XML DBMS</li>
                </ul>
              </div>
              <label className = 'style'>
                <h3 className = "research" aria-hidden="true">research</h3>
              </label>
            </div>

        );
    }
}

export default Research;
