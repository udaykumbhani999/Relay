import React from "react";
import "../What_look/What_look.scss";

import Look_card from "../ Look_card/Look_card";

import { ReactComponent as Tools } from "../../Assets/Images/Tools.svg";
import { ReactComponent as Coin } from "../../Assets/Images/Coin.svg";
import { ReactComponent as Profile } from "../../Assets/Images/Profile.svg";
import { ReactComponent as Category } from "../../Assets/Images/Category.svg";
import { ReactComponent as Review } from "../../Assets/Images/Review.svg";
import { ReactComponent as History } from "../../Assets/Images/History.svg";


const What_look = () => {
  return (
    <div className="what_look">
      <div className="look_wrapper">
        <div className="leftslook">
          <div className="what_look_left">
            <h2 className="look_headingleft">Here's what we look for.</h2>
            <div className='leftbg'></div>
          </div>
        </div>
        <div className="rightslook">
          <div className="wrapper_cards">
            <div className="What_look_right">
              <Look_card
              cardimg={<Tools />}
              cardtitle={'Ecommerce Software Tools'}
              card_subtitle={'You have a SaaS app for Shopify, Amazon, or another ecommerce platform.'}
              />
            </div>
            <div className="What_look_right">
              <Look_card
              cardimg={<Coin />}
              cardtitle={'Revenue Generating'}
              card_subtitle={'Your annual recurring revenue falls within $250K - $3MM.'}
              />
            </div>
            <div className="What_look_right">
              <Look_card
              cardimg={<Profile />}
              cardtitle={'High Margins'}
              card_subtitle={'You show stable, sustainable profits.'}
              />
            </div>
            <div className="What_look_right">
              <Look_card
              cardimg={<Category />}
              cardtitle={'Unique Positioning'}
              card_subtitle={'You have a brand that stands out in its category.'}
              />
            </div>
            <div className="What_look_right">
              <Look_card
              cardimg={<Review />}
              cardtitle={'Customer Loyalty'}
              card_subtitle={'We like SaaS tools with strong reviews, rankings, or ratings.'}
              />
            </div>
            <div className="What_look_right">
              <Look_card
              cardimg={<History />}
              cardtitle={'Operating History'}
              card_subtitle={'Your company has been in business at least 18 months.'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_look;
