import React from 'react';

import Button from './Button';

const Buttons = (props) => {
  const keyInput = (value) => {
    props.onInput(value);
  };

  return (
    <div className="calculator-input" style={{
      backgroundColor: props.theme.toggleBackground
    }}>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(7);
        }}
      >
        7
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(8);
        }}
      >
        8
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(9);
        }}
      >
        9
      </Button>
      <Button theme={props.theme} onClick={() => props.onDelete()} styleType="dark">
        DEL
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(4);
        }}
      >
        4
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(5);
        }}
      >
        5
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(6);
        }}
      >
        6
      </Button>
      <Button theme={props.theme} onClick={() => props.onCalculate('+')}>
        +
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(1);
        }}
      >
        1
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(2);
        }}
      >
        2
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(3);
        }}
      >
        3
      </Button>
      <Button theme={props.theme} onClick={() => props.onCalculate('-')}>
        -
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput('.');
        }}
      >
        .
      </Button>
      <Button
        theme={props.theme}
        onClick={() => {
          keyInput(0);
        }}
      >
        0
      </Button>
      <Button theme={props.theme} onClick={() => props.onCalculate('/')}>
        /
      </Button>
      <Button theme={props.theme} onClick={() => props.onCalculate('x')}>
        x
      </Button>
      <Button theme={props.theme} onClick={() => props.onReset()} styleType="dark" isWide={true}>
        RESET
      </Button>
      <Button theme={props.theme} styleType="red" isWide={true} onClick={() => props.onResult()}>
        =
      </Button>
    </div>
  );
};

export default Buttons;
