import React from 'react';
import '../ Look_card/Look_card.scss';

import { ReactComponent as Tools } from "../../Assets/Images/Tools.svg";



const Look_card = ({cardimg, cardtitle, card_subtitle}) => {
  return (
    <div className='lokcard'>
        <div className='card_wrapper'>
            <div className='card_images'>
                { cardimg }
            </div>
            <div className='card_content'>
                  <h4 className='card_h4'>{ cardtitle }</h4>
                  <h6 className='card_h6'>{ card_subtitle }</h6>
            </div>
        </div>
    </div>
  )
}

export default Look_card