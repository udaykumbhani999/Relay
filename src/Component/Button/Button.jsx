import React from 'react';
import "../Button/Button.scss";


const Button = ({btn_name}) => {
  return (
    <div className='btns'>
        <button className="btn" type="submit">{ btn_name }</button>
    </div>
  )
}

export default Button