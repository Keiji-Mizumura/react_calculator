import React from 'react';

import { useState } from 'react';

const Button = (props) => {
  let button;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);


  const normalStyles = {
    backgroundColor: props.theme.keyBackground,
    boxShadow: isHover ? `0 3px 0 ${props.theme.keyShadow}` : `0 5px 0 ${props.theme.keyShadow}`,
    color: props.theme.mainText,
    transform: isHover && 'translateY(2px)'
  }

  const darkStyles = {
    backgroundColor: props.theme.controlKeyBackground,
    boxShadow: isHover ? `0 3px 0 ${props.theme.controlKeyShadow}` : `0 5px 0 ${props.theme.controlKeyShadow}`,
    color: props.theme.subText,
    fontSize: '24px',
    transform: isHover && 'translateY(2px)'
  }

  const redStyles = {
    backgroundColor: props.theme.warningKeyBackground,
    boxShadow: isHover ? `0 5px 0 ${props.theme.warningKeyShadow}` : `0 5px 0 ${props.theme.warningKeyShadow}`,
    color: props.theme.equalText,
    fontSize: '24px',
    transform: isHover && 'translateY(2px)'
  }

  button = (
    <button className="btn" onClick={props.onClick} style={props.isWide ? { gridColumn: 'span 2', ...normalStyles } : normalStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </button>
  );

  if (props.styleType === 'dark') {
    button = (
      <button className="btn" onClick={props.onClick} style={props.isWide ? { gridColumn: 'span 2', ...darkStyles } : darkStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        >
        {props.children}
      </button>
    );
  }

  if (props.styleType === 'red') {
    button = (
      <button className="btn btnRed" onClick={props.onClick} style={props.isWide ? { gridColumn: 'span 2', ...redStyles } : redStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {props.children}
      </button>
    );
  }

  return <>{button}</>;
};

export default Button;
