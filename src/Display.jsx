import React from 'react';

const Display = (props) => {

  return (
    <div className="calculator-display" style={
      {
        backgroundColor: props.theme.screenBackground,
        color: props.theme.displayText
      }
    }>
      <h1>{props.displayValue}</h1>
    </div>
  );
};

export default Display;
