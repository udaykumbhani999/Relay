import React from "react";
import "../Footer/Footer.scss";
import { ReactComponent as Ft_logo } from "../../Assets/Images/Ft_logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="Ft_wrapper">
          <div className="ft_left">
            <a href="/" className="ft_logo">
              <Ft_logo />
            </a>
            <p className="ft_copyright">
              © 2022 Relay Commerce. All rights reserved.
            </p>
          </div>
          <div className="ft_right">
            <a href="/" className="Contact">
              Contact Us
            </a>
            <a href="/" className="carfted">
              Crafted by<span className="crafted_text">CollabWest</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
