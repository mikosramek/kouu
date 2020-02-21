import styled from 'styled-components';
import v from './style-variables';

export const H1 = styled.h1`
  padding: 20px 0;
  font-size:2.4rem;
  color: ${v.white};
  text-align: right;
`
export const P = styled.p`
  padding: 5px 0;
  font-size:1.8rem;
  text-align: ${props => props.align ? props.align : 'none'};
  color: ${props => props.color ? props.color : v.white};
`
const text = {
  P: P,
  H1: H1
}
export default text;