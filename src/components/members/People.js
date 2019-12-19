import React from 'react'
import '../../style/members.css'
import CancelIcon from '@material-ui/icons/Cancel';

class People extends React.Component{
    constructor(props){
      super(props);
      this.state={
        information:[
        {
          name:'Scott',
          position: 'Professor',
          address: 'scottlee@hanyang.ac.kr',
          web: 'https://selab.hanyang.ac.kr/members/TBA',
          position2: 'an asst. prof. in the CSE Dept. @ HYU (ERICA) leading this Laboratory!',
          photo: require('./photo/Scott.jpg'),
          career: '11 -      : Assistant Professor in CSE Dept. @ Hanyang University, Korea\n09 - 11 : Postdoc @ CEA LIST, France\n05 - 06 : SE Programmer in SE Dept. @ University of Auckland, NZ\n04 - 04 : Visiting Researcher @ National University of Singapore\n04 - 08 : Ph.D in Computer Science @ University of Auckland, NZ\n00 - 03 : BE in Software Engineering @ University of Auckland, NZ'
        },
        {
          name: 'Isma Farah',
          position: 'PhD',
          address: 'isma2012@hanyang.ac.kr',
          web: 'http://www.linkedin.com/in/ismafarah',
          position2: 'PhD scholar From Pakistan on HEC Scholarship',
          photo: require('./photo/Isma Farah.jpg'),
          research_interests: 'Software Engineering\nWeb Applications\nSemantic Web\nDatabase Management\nFormal Methods'
        },
        {
          name: 'Abdul Rahim',
          position: 'PhD',
          address: 'rahim750413@hanyang.ac.kr',
          web: 'https://www.facebook.com/abdul.ariffin',
          position2: 'Master\'s leading to Phd scholarfrom Kuala Lumpur,Malaysia',
          photo: require('./photo/Abdul Rahim.jpg'),
          research_interests: 'Software Engineering\n-Hadoop(MapReduce)\n- Multithreading'
        },
        {
          name: 'Asad Abbas',
          position: 'PhD',
          address: 'asadabbas@hanyang.ac.kr',
          web: ' ',
          position2: 'HEC Pakistan Scholar MS leading to PhD From Pakistan',
          photo: require('./photo/Asad Abbas.jpg'),
          research_interests: 'Software Engineering\n-Product Line Software Engineering'
        },
        {
          name: 'Gichan Lee',
          position: 'PhD',
          address: 'fantasyopy@gmail.com',
          web: 'https://www.linkedin.com/in/GCSELAB',
          position2: '2016-2 ~ M.E. to Ph.D.',
          photo: require('./photo/Gichan Lee.jpg'),
          research_interests: 'Software Engineering in practice\nAccess Control in IoT environment(project)'
        },
        {
          name: 'Mohsin Javaid',
          position: 'PhD',
          address: 'mohsinjavaid@hanyang.ac.kr',
          web: 'https://goo.gl/3QXH6k',
          position2: 'Ph.D. Scholar from Pakistan on HEC Scholarship.',
          photo: require('./photo/no.png'),
          research_interests: 'Software Engineering\nModel Driven Architecture\nInternet of Things\nAndroid Application\nRequirement Engineering'
        },
        {
          name: 'Muhammad Umair Khan',
          position: 'PhD',
          address: 'mumairkhan@hanyang.ac.kr',
          web: 'https://goo.gl/GdYteF',
          position2: 'Ph.D. Scholar from Pakistan on HEC scholarship',
          photo: require('./photo/Muhammad Umair Khan.jpg'),
          research_interests: 'Software Engineering\nConcurrent Programming\nInternet of Thing'
        },
        {
          name: 'Gayeon Kim',
          position: 'M.E.',
          address: 'gayeonkim91@gmail.com',
          web: 'http://www.linkedin.com/in/ismafarah',
          position2: 'Hi',
          photo: require('./photo/Gayeon Kim.jpg'),
          research_interests: 'Software Engineering\nWeb Application\nBigdata analysis'
        },
        {
          name: 'Seonwoong Kim',
          position: 'M.E.',
          address: 'oung123@hanmail.net',
          web: ' ',
          position2: 'Wussup',
          photo: require('./photo/no.png'),
          research_interests: 'Software Engineering\nModel Checking\nSwift2'
        },
        {
          name: 'Wu Zhiqiang',
          position: 'M.E.',
          address: 'hhhwwwuuu@hanyang.ac.kr',
          web: ' ',
          position2: ' ',
          photo: require('./photo/Wu Zhiqiang.jpg'),
          research_interests: 'Software engineering\n- Concurrency Detection\n- Malware Detection'
        },
        {
          name: 'Gwanggyu Choi',
          position: 'M.E.',
          address: 'gcahmoei@hanyang.ac.kr',
          web: ' ',
          position2: ' ',
          photo: require('./photo/Gwanggyu Choi.gif'),
          research_interests: 'Software engineering\n- requirement engineering'
        },
        {
          name: 'Hyunglak Kim',
          position: 'M.E.',
          address: 'jikuaij@gmail.com',
          web: ' ',
          position2: 'Hi',
          photo: require('./photo/Hyunglak Kim.jpg'),
          research_interests: 'Software Engineering\n- Crowdsourcing Software Develop\n- Android Application\n- Model Checking'
        },
        {
          name: 'Youn Guen Ahn',
          position: 'M.E.',
          address: 'frebern@naver.com',
          web: 'http://frebern.xyz',
          position2: 'TBA',
          photo: require('./photo/no.png'),
          research_interests: 'Java,Android'
        },
        {
          name: 'Kyojune Hwang',
          position: 'M.E.',
          address: ' ',
          web: ' ',
          position2: ' ',
          photo: require('./photo/no.png'),
          research_interests: ' '
        },
        {
          name: 'Hakjin Lee',
          position: 'M.E.',
          address: 'gsdjini91@gmail.com',
          web: ' ',
          position2: ' ',
          photo: require('./photo/no.png'),
          research_interests: 'Smell Detection\nRefactoring\nGame QA'
        },
        {
          name: 'Dahae Sung',
          position: 'Intern',
          address: 'sdh4513136@hanmail.net',
          web: ' ',
          position2: ':)',
          photo: require('./photo/Dahae Sung.jpg'),
          research_interests: ' '
        },
        {
          name: 'Yongtaek Oh',
          position: 'Intern',
          address: 'ka123ak1@gmail.com',
          web: ' ',
          position2: ' ',
          photo: require('./photo/no.png'),
          research_interests: 'IoT'
        },
        {
          name: 'Namju Park',
          position: 'Intern',
          address: 'qkrska66@hanyang.ac.kr',
          web: ' ',
          position2: ' ',
          photo: require('./photo/no.png'),
          research_interests: ' '
        },
        {
          name: 'Jaejin Kim',
          position: 'Alumni',
          address: 'jaejinkim@hanyang.ac.kr',
          web: 'https://www.facebook.com/musalhk',
          position2: '2012 - 1st M.E. in SELAB.\n2014 - Software Engineer in Cloud Lab. B2B / \nSamsung Electronics Mobile Communications Business ',
          photo: require('./photo/no.png'),
          research_interests: '- Access Control in Ubiquitous\n- Software Engineering\n- IoT Technology (Internet of Things)\n- Health & Medical Technology\n- Cloud Computing '
        },
        {
          name: 'Jiang Hua',
          position: 'Alumni',
          address: 'jh19880208@163.com',
          web: ' ',
          position2: '0.0',
          photo: require('./photo/Jiang Hua.jpg'),
          research_interests: 'Requirement Engineering'
        },
        {
          name: 'Jaeho Choi',
          position: 'Alumni',
          address: 'jaeho34@hanyang.ac.kr',
          web: 'http://www.facebook.com/rogue9071',
          position2: 'Hi, guys!! I am a crazy boy in this area :-)',
          photo: require('./photo/Jaeho Choi.JPG'),
          research_interests: 'Software Engineering\nA field of Access Control(XACML tools)\nWeb Application & Security\nCloud Computing Evironment\nSocial Network Service'
        },
        {
          name: 'Geunhwan Park',
          position: 'Alumni',
          address: '0101d8cf@gmail.com',
          web: 'http://selab.hanyang.ac.kr/~pgh',
          position2: 'Hi',
          photo: require('./photo/Geunhwan Park.jpg'),
          research_interests: ' '
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
        var career = null;
        var careerlist = null;
        var research_interests = null;
        var research_interestslist = null;
        var photo = null;
        var i=0;
        while(i<this.state.information.length){
          if(this.props.name===this.state.information[i].name){
              name = this.state.information[i].name;
              position=this.state.information[i].position;
              address=this.state.information[i].address;
              web=this.state.information[i].web;
              position2=this.state.information[i].position2;
              photo=this.state.information[i].photo;
            if(this.state.information[i].position==="Professor"){
              career=this.state.information[i].career.split('\n');
              careerlist = career.map((career)=>(<li>{career}</li>))
              return (
                <div className='popup'>
                  <img className="popinme" src={photo} alt='No photo'/>


                    <h1>{position} </h1>
                    <ul>
                      <li className="display"><p>Name: {name}  </p></li>
                      <li className="display"><p>Address: {address}</p></li>
                      <li className="display"><p>Website: <a href={web}>{web}</a></p></li>
                      <li><p>Position: {position2}</p></li>
                      <li><p>Career:</p>
                      <ul>{careerlist}</ul>
                    </li>
                    </ul>

                </div>
        );
            }
            else if(this.state.information[i].position==="PhD"){
              research_interests=this.state.information[i].research_interests.split('\n');
              research_interestslist = research_interests.map((research_interests)=>(<li>{research_interests}</li>))
              return (
                <div className='popup'>
                  <img className="popinme" src={photo} alt='No photo'/>

                    <h1>{position} </h1>
                    <ul>
                    <li className="display"><p>Name: {name}</p></li>
                    <li className="display"><p>Address: {address}</p></li>
                    <li className="display"><p>Website: <a href={web}>{web}</a></p></li>
                    <li><p>Position: {position2}</p></li>
                    <li><p>Research Interests:</p>
                      <ul>{research_interestslist}</ul>
                    </li>
                  </ul>

                </div>
          );
            }
            else{
              research_interests=this.state.information[i].research_interests.split('\n');
              research_interestslist = research_interests.map((research_interests)=>(<li>{research_interests}</li>))
              return (
                <div className='popup'>
                  <img className="popinme" src={photo} alt='No photo'/>


                  <h1>{position} </h1>
                  <ul>
                    <li className="display"><p >Name: {name} </p></li>
                    <li className="display"><p >Address: {address}</p></li>
                    <li className="display"><p >Website: <a href={web}>{web}</a></p></li>
                    <li><p>Position: {position2}</p></li>
                    <li><p>Research Interests:</p>
                      <ul>{research_interestslist}</ul>
                    </li>
                  </ul>
                  </div>
                
        );
            }
          }
          i++
        }

      }
}

export default People;
