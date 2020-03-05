import React from 'react';
import {Link} from 'react-router-dom';

const CustomLink = ({disabled, path, text, className}) => {
  return(
    disabled
      ? <span className={`${className} disabled`}>{text}</span>
      : <Link to={path} className={className}>
          {text}
        </Link>
  )
}

export default CustomLink;