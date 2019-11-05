import React from 'react'

class Professor extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name:'Scott',
        human1: {
          position: 'Professor',
          address: 'scottlee@hanyang.ac.kr',
          web: 'https://selab.hanyang.ac.kr/members/TBA',
          position2: 'an asst. prof. in the CSE Dept. @ HYU (ERICA) leading this Laboratory!',
          career: '11 -      : Assistant Professor in CSE Dept. @ Hanyang University, Korea\n09 - 11 : Postdoc @ CEA LIST, France\n05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ\n04 - 04 : Visiting Researcher @ National University of Singapore\n04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ\n00 - 03 : BE in Software Engineering @ University of Auckland, NZ'
        },
      }
    }


    render() {
        var position = null;
        var address = null;
        var web = null;
        var position2 = null;
        var career = null;
        position=this.state.human1.position;
        address=this.state.human1.address;
        web=this.state.human1.web;
        position2=this.state.human1.position2;
        career=this.state.human1.career.split('\n');
        const careerlist = career.map((career)=>(<li>{career}</li>))
        return (  
          <div className='popup'>
            <div className='popup_inner'>
              <h1>{position} </h1>
              <ul>
              <li><p>Address: {address}</p></li>
              <li><p>Website: <a href={web}>{web}</a></p></li>
              <li><p>Position: {position2}</p></li>
              <li><p>Career:</p>
                <ul>{careerlist}</ul>
              </li>
            </ul>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
              }
          </div>
        );
      }
}

export default Professor;