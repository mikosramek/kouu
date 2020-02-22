import React from 'react';

const MenuButton = (props) => {
  const action = (e) => {
    e.preventDefault();
    props.action();
  }
  return(
    <li>
      <button onClick={action}>
        <i className={`fas ${props.icon}`}></i> {props.text}
      </button>
    </li>
  )
}

export default MenuButton;