import React from 'react';
import AboutUs from './AboutUs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";

  
export default function Navbar(props) {
  const { user, handleSignout } = props;
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    // document.getElementById("buttonDiv").hidden = false;
  };

  const handleClick = () => {
    handleLogout();
    handleSignout();
  };

    return (
        <div>
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">Smart Menu</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/AboutUs">About Us</a>
                      </li>
                        
                   {/* <li>{this.handleSignout}</li>    */}
                  </ul>
                  <ul className="navbar-nav ms-auto">
                      {Object.keys(user).length !== 0 ? (
                        <>
                          <li className="nav-item">
                            <span className="nav-link">{`Hello, ${user.name}`}</span>
                          </li>
                          <li className="nav-item">
                            <Button
                              type="primary"
                              icon={<PoweroffOutlined />}
                              onClick={handleClick}
                            >
                              Sign Out
                            </Button>
                          </li>
                        </>
                      ) : (
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Sign In
                          </a>
                        </li>
                      )}
            </ul>
                </div>
              </div>
          </nav>
  
        </div>
      );
}
