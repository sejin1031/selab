import React from 'react';
import Menu from './Menu';
import './easter.css'; 
import Popup from "reactjs-popup";

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);


export default class Egg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu : false,
      weather : false,
      
    }
  }

  render(){
  return (
    <div className="MyModal">
      <div className="content">
        <div className="page" onClick={()=>this.setState({menu : !this.state.menu})} ><button class="fun-btn">점심 뭐먹을까?? 클릭!</button></div>
        {
          this.state.menu && <Menu/>
        }
        <div>
          <div className="clsbutton" onClick={this.props.onClose}>닫기</div>
        </div>
      </div>
    </div>
  );
  }
}


// $('.fun-btn').on('click', function(event) {
//   $(this).toggleClass('start-fun');
//   var $page = $('.page');
//   $page.toggleClass('color-bg-start')
//     .toggleClass('bg-animate-color');

//   //change text when when button is clicked

//   $(this).hasClass('start-fun') ?
//     $(this).text('stop the fun') :
//     $(this).text('start the fun');

// });