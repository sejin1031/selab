import React,{Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animation';


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite `;

class Gallery extends React.Component {
    render() {
        const galleryStyle={
            margin:"0px 0px 0px 13%"
        }
        return (
            <Bounce><h1 style={galleryStyle}>Hello</h1></Bounce>
        );
    }
}

export default Gallery;