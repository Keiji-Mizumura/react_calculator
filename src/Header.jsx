import React from 'react';

const Header = (props) => {
  return (
    <div className="calculator-header">
      <div className="title">
        <h1 style={{color: props.theme.displayText}}>calc</h1>
      </div>
      <div className="theme-control">
        <p className='theme-name'>THEME</p>
        <div className="theme-input">
            <div className="numbers" style={{
              color: props.theme.displayText
            }}>
                <p>
                    1
                </p>
                <p>
                    2
                </p>
                <p>
                    3
                </p>
            </div>
            <div className="toggle" onClick={props.onToggle} style={{
              backgroundColor: props.theme.toggleBackground
            }}>
                {props.currentTheme === 0 ? <button className='toggle-button' style={{ backgroundColor: props.theme.warningKeyBackground }}></button> : <div></div>}
                {props.currentTheme === 1 ? <button className='toggle-button' style={{ backgroundColor: props.theme.warningKeyBackground }}></button> : <div></div>}
                {props.currentTheme === 2 ? <button className='toggle-button' style={{ backgroundColor: props.theme.warningKeyBackground }}></button> : <div></div>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
