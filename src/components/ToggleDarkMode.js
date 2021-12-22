import React from 'react'
import './ToggleDarkMode.css'
import Sun from '../img/sun-solid.svg'
import Moon from '../img/moon-solid.svg'
import { useContext } from 'react'
import { ThemeContext } from '../context'

const ToggleDarkMode = () => {

  const theme = useContext(ThemeContext);

  const toggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  }

  return (
    <div className='t-darkmode'>
      <img src={Sun} alt="toggle" className='t-icon icon1'/>
      <img src={Moon} alt="toggle" className='t-icon icon2'/>
      <div className='t-button' onClick={toggle} style={{left: theme.state.darkMode ? 0 : '28px'}}></div>   
    </div>
  )
}

export default ToggleDarkMode
