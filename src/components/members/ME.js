import React, { Component } from 'react'

class ME extends Component{
    constructor(props){
      super(props);
      this.state={
        information: [
        {
          name: 'Gayeon Kim',
          position: 'M.E.',
          address: 'gayeonkim91@gmail.com',
          web: 'http://www.linkedin.com/in/ismafarah',
          position2: 'Hi',
          research_interests: 'Software Engineering\nWeb Application\nBigdata analysis'         
        },
        {
          name: 'Seonwoong Kim',
          position: 'M.E.',
          address: 'oung123@hanmail.net',
          web: ' ',
          position2: 'Wussup',
          research_interests: 'Software Engineering\nModel Checking\nSwift2'
        },
        {
          name: 'Wu Zhiqiang',
          position: 'M.E.',
          address: 'hhhwwwuuu@hanyang.ac.kr',
          web: ' ',
          position2: ' ',
          research_interests: 'Software engineering\n- Concurrency Detection\n- Malware Detection'
        },
        {
          name: 'Gwanggyu Choi',
          position: 'M.E.',
          address: 'gcahmoei@hanyang.ac.kr',
          web: ' ',
          position2: ' ',
          research_interests: 'Software engineering\n- requirement engineering'
        },
        {
          name: 'Hyunglak Kim',
          position: 'M.E.',
          address: 'jikuaij@gmail.com',
          web: ' ',
          position2: 'Hi',
          research_interests: 'Software Engineering\n- Crowdsourcing Software Develop\n- Android Application\n- Model Checking'
        },
        {
          name: 'Youn Guen Ahn',
          position: 'M.E.',
          address: 'frebern@naver.com',
          web: 'http://frebern.xyz',
          position2: 'TBA',
          research_interests: 'Java,Android'
        },
        {
          name: 'Kyojune Hwang',
          position: 'M.E.',
          address: ' ',
          web: ' ',
          position2: ' ',
          research_interests: ' '
        },
        {
          name: 'Hakjin Lee',
          position: 'M.E.',
          address: 'gsdjini91@gmail.com',
          web: ' ',
          position2: ' ',
          research_interests: 'Smell Detection\nRefactoring\nGame QA'
        },
      ]
      }
    }


    render() {
        var position = null;
        var address = null;
        var web = null;
        var position2 = null;
        var research_interests = null;
        var research_interestslist = null;
        var i=0;
        while(i<this.state.information.length){
          if(this.props.name===this.state.information[i].name){
            position=this.state.information[i].position;
            address=this.state.information[i].address;
            web=this.state.information[i].web;
            position2=this.state.information[i].position2;
            research_interests=this.state.information[i].research_interests.split('\n');
            research_interestslist = research_interests.map((research_interests)=>(<li>{research_interests}</li>))
          }
          i++;

        }
        return (  
          <div className='popup'>
            <div className='popup_inner'>
              <h1>{position} </h1>
            <ul>
              <li><p>Address: {address}</p></li>
              <li><p>Website: <a href={web}>{web}</a></p></li>
              <li><p>Position: {position2}</p></li>
              <li><p>Research Interests:</p>
                <ul>{research_interestslist}</ul>
              </li>
            </ul>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
              }
          </div>
        );
      }
}

export default ME;