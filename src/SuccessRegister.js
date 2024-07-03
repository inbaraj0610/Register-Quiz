import React from 'react';
import './SuccessRegister.css';
import letsplay from './gif/letsplay.gif'

function SuccessRegister() {
  return (
    <div className='successbg'>
      <div className='set'>
        <img src={letsplay} alt='letsplay'/>
        <h1>Successfully Registered</h1>
        <a href='./quiz'>Ready To Play</a>
      </div>
    </div>
  );
}

export default SuccessRegister;
