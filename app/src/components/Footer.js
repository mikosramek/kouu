import React from 'react';
import Backgrounds from '../style-components/style-backgrounds';
import { P } from '../style-components/style-text';

const Footer = () => {
  return (
    <Backgrounds.Footer>
      <Backgrounds.Wrapper>
        <P align={'center'}>HaM Games © 2020</P>
      </Backgrounds.Wrapper>
    </Backgrounds.Footer>
  )
}

export default Footer;