import styled from 'styled-components';
import vars from './style-variables';
// import keyframes from './style-keyframes';

import bg from '../assets/hangul-pattern-tile.png'

const Backgrounds = {};


Backgrounds.Header = styled.header`
  background-color: ${vars.highlight};
  min-height:10vh;
`
Backgrounds.Main = styled.main`
  background-color: ${vars.primary};;
  min-height: 85vh;
  background-image: url(${bg});
  background-size: 25%;
  padding-top: 50px;
  padding-bottom: 50px;
`
//animation: ${keyframes.translateBackground} 25s linear infinite;
Backgrounds.Footer = styled.footer`
  background-color: ${vars.highlight};
  min-height: 5vh;
`
Backgrounds.Wrapper = styled.div`
  max-width: 1080px; 
  width: 90%; 
  margin: 0 auto;
`

export default Backgrounds;