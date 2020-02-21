import { keyframes } from 'styled-components';
const animations = {};

animations.translateBackground = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export default animations;