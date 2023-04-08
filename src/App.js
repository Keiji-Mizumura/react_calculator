import React from 'react'
import './App.css';
import Calculator from './Calculator';

import { useState } from 'react';

const App = () => {

  const theme1 = {
    mainBackground: 'hsl(222, 26%, 31%)',
    toggleBackground: 'hsl(223, 31%, 20%)',
    screenBackground: 'hsl(224, 36%, 15%)',
    controlKeyBackground: 'hsl(225, 21%, 49%)',
    controlKeyShadow: 'hsl(224, 28%, 35%)',
    warningKeyBackground: 'hsl(6, 63%, 50%)',
    warningKeyShadow: 'hsl(6, 70% ,34%)',
    keyBackground: 'hsl(30, 25%, 89%)',
    keyShadow: 'hsl(28, 16%, 65%)',
    mainText: 'hsl(221, 14%, 31%)',
    subText: 'hsl(0, 0%, 100%)',
    equalText: 'hsl(0, 0%, 100%)',
    displayText: 'hsl(0, 0%, 100%)'
  }

  const theme2 = {
    mainBackground: 'hsl(0, 0%, 90%)',
    toggleBackground: 'hsl(0, 5%, 81%)',
    screenBackground: 'hsl(0, 0%, 93%)',
    controlKeyBackground: 'hsl(185, 42%, 37%)',
    controlKeyShadow: 'hsl(185, 58%, 25%)',
    warningKeyBackground: 'hsl(25, 98%, 40%)',
    warningKeyShadow: 'hsl(25, 99%, 27%)',
    keyBackground: 'hsl(45, 7%, 89%)',
    keyShadow: 'hsl(35, 11%, 61%)',
    mainText: 'hsl(60, 10%, 19%)',
    subText: 'hsl(0, 0%, 100%)',
    equalText: 'hsl(0, 0%, 100%)',
    displayText: 'hsl(60, 10%, 19%)'
  }

  const theme3 = {
    mainBackground: 'hsl(268, 75%, 9%)',
    toggleBackground: 'hsl(268, 71%, 12%)',
    screenBackground: 'hsl(281, 89%, 26%)',
    controlKeyBackground: 'hsl(281, 89%, 26%)',
    controlKeyShadow: 'hsl(285, 91%, 52%)',
    warningKeyBackground: 'hsl(176, 100%, 44%)',
    warningKeyShadow: 'hsl(177, 92%, 70%)',
    keyBackground: 'hsl(268, 47%, 21%)',
    keyShadow: 'hsl(290, 70%, 36%)',
    mainText: 'hsl(52, 100%, 62%)',
    subText: 'hsl(0, 0%, 100%)',
    equalText: 'hsl(198, 20%, 13%)',
    displayText: 'hsl(52, 100%, 62%)'
  }

  const [activeTheme, setActiveTheme] = useState(theme1);
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [theme1, theme2, theme3];

  const changeTheme = () => {
    if (themeIndex + 1 < themes.length){
      setActiveTheme(themes[themeIndex + 1]);
      setThemeIndex(themeIndex + 1);
    }
    else{
      setActiveTheme(themes[0])
      setThemeIndex(0);
    }
  }


  return (
    <main style={{
      backgroundColor: activeTheme.mainBackground
    }}>
      <Calculator theme={activeTheme} onToggle={changeTheme} currentTheme={themeIndex}/>
    </main>
  )
}

export default App