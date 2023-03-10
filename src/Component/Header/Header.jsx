import React from "react";
import "../Header/Header.scss";

import { ReactComponent as Relay } from "../../Assets/Images/Relay.svg";
import Button from "../Button/Button";


const Header = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             <Relay />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            {/* <span className="navbar-toggler-icon"></span> */}
            <div className="menuicon">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                  Why Relay
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  What we Look for
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  How it Works
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <Button
                btn_name='Let’s Chat'
                />
              </form>
            </div>
          </div>
        </nav>
    </header>
  );
};

export default Header;
