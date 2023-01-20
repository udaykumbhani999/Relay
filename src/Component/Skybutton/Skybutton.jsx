import React from 'react';
import "../Skybutton/Skybutton.scss";


const Skybutton = ({skybtn_name}) => {
  return (
    <div className='skybtn'>
         <button className="btns" type="submit">{ skybtn_name }</button>
    </div>
  )
}

export default Skybutton