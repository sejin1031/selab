import React, { Component } from 'react'

class PhD extends Component{
    constructor(props){
      super(props);
      this.state={
        information: [
        {
          name: 'Isma Farah',
          position: 'PhD',
          address: 'isma2012@hanyang.ac.kr',
          web: 'http://www.linkedin.com/in/ismafarah',
          position2: 'PhD scholar From Pakistan on HEC Scholarship',
          research_interests: 'Software Engineering\nWeb Applications\nSemantic Web\nDatabase Management\nFormal Methods'         
        },
        {
          name: 'Abdul Rahim',
          position: 'PhD',
          address: 'rahim750413@hanyang.ac.kr',
          web: 'https://www.facebook.com/abdul.ariffin',
          position2: 'Master\'s leading to Phd scholarfrom Kuala Lumpur,Malaysia',
          research_interests: 'Software Engineering\n-Hadoop(MapReduce)\n- Multithreading'
        },
        {
          name: 'Asad Abbas',
          position: 'PhD',
          address: 'asadabbas@hanyang.ac.kr',
          web: ' ',
          position2: 'HEC Pakistan Scholar MS leading to PhD From Pakistan',
          research_interests: 'Software Engineering\n-Product Line Software Engineering'
        },
        {
          name: 'Gichan Lee',
          position: 'PhD',
          address: 'fantasyopy@gmail.com',
          web: 'https://www.linkedin.com/in/GCSELAB',
          position2: '2016-2 ~ M.E. to Ph.D.',
          research_interests: 'Software Engineering in practice\nAccess Control in IoT environment(project)'
        },
        {
          name: 'Mohsin Javaid',
          position: 'PhD',
          address: 'mohsinjavaid@hanyang.ac.kr',
          web: 'https://goo.gl/3QXH6k',
          position2: 'Ph.D. Scholar from Pakistan on HEC Scholarship.',
          research_interests: 'Software Engineering\nModel Driven Architecture\nInternet of Things\nAndroid Application\nRequirement Engineering'
        },
        {
          name: 'Muhammad Umair Khan',
          position: 'PhD',
          address: 'mumairkhan@hanyang.ac.kr',
          web: 'https://goo.gl/GdYteF',
          position2: 'Ph.D. Scholar from Pakistan on HEC scholarship',
          research_interests: 'Software Engineering\nConcurrent Programming\nInternet of Thing'
        },
      ]
      }
    }


    render() {
        var name = null;
        var position = null;
        var address = null;
        var web = null;
        var position2 = null;
        var research_interests = null;
        var research_interestslist = null;
        var i=0;
        while(i<this.state.information.length){
          if(this.props.name===this.state.information[i].name){
            name = this.state.information[i].name;
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
              <li><p>Name: {name}</p></li>
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

export default PhD;