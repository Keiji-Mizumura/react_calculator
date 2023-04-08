import React from 'react';
import Buttons from './Buttons';
import Display from './Display';

import { useState } from 'react';
import Header from './Header';

const Calculator = (props) => {

  const [displayValue, setDisplayValue] = useState('0');

  const changeDisplay = (value) => {
    if (displayValue === '0' && value !== '.') {
      setDisplayValue('' + value);
    } else {
      if (value === '.') {
        const values = displayValue.split(/[+\-x/]/);
        const lastValue = values[values.length - 1];
        if (lastValue.indexOf('.') === -1) {
          setDisplayValue(displayValue + value);
        }
      } else {
        setDisplayValue(displayValue + value);
      }
    }
  };

  const resetInput = () => {
    setDisplayValue('0');
  };

  const onDelete = () => {
    const remainingValue = displayValue.slice(0, -1);
    if (remainingValue !== '') {
      setDisplayValue(remainingValue);
    } else {
      setDisplayValue('0');
    }
  };

  const onCalculate = (oper) => {
    const lastChar = displayValue.slice(-1);

    if (!isNaN(parseInt(lastChar, 10))) {
      switch (oper) {
        case '+':
          setDisplayValue(displayValue + '+');
          break;
        case '-':
          setDisplayValue(displayValue + '-');
          break;
        case 'x':
          setDisplayValue(displayValue + 'x');
          break;
        case '/':
          setDisplayValue(displayValue + '/');
          break;
        default:
        // Dunno
      }
    } else if (isNaN(parseInt(lastChar, 10)) && oper !== lastChar) {
      setDisplayValue(displayValue.slice(0, -1) + oper);
    }
  };

  const onResult = () => {
    let result = displayValue.replace(/x/g, '*');
    const regex = /(\d*\.?\d+)|([+\-*/])/g;
    const tokens = result.match(regex);
    const ops = ['*', '/', '+', '-'];

    // Perform multiplication and division first
    for (let i = 0; i < ops.length; i++) {
      for (let j = 1; j < tokens.length; j += 2) {
        if (tokens[j] === ops[i]) {
          const left = parseFloat(tokens[j - 1]);
          const right = parseFloat(tokens[j + 1]);
          const op = tokens[j];

          if (op === '*') {
            tokens.splice(j - 1, 3, left * right);
            j -= 2;
          } else if (op === '/') {
            tokens.splice(j - 1, 3, left / right);
            j -= 2;
          }
        }
      }
    }

    // Perform addition and subtraction second
    let value = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const right = parseFloat(tokens[i + 1]);

      if (op === '+') {
        value += right;
      } else if (op === '-') {
        value -= right;
      }
    }
    // Set the result to the calculated value
    setDisplayValue(value.toString());
  };

  return (
    <div className="calculator">
      <Header theme={props.theme} onToggle={props.onToggle} currentTheme={props.currentTheme}/>
      <Display displayValue={displayValue} theme={props.theme}/>
      <Buttons onInput={changeDisplay} onReset={resetInput} onDelete={onDelete} onCalculate={onCalculate} onResult={onResult} theme={props.theme}/>
    </div>
  )
};

export default Calculator;
