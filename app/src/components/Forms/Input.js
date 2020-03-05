import React from 'react';

const Input = ({id, val, changeVal, type}) => {
  return(
    <input type={type ? type : 'text'} id={id} value={val} onChange={e => changeVal(e.target.value)} />
  )
}

export default Input;