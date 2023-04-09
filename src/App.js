import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import PhoneInputGfg from "./components/PhoneInputGfg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, userEffect, useState } from "react";

import jwt_decode from "jwt-decode";
import { Button, Space } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function App() {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT token: ", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject)); // set user object in local storage
    document.getElementById("buttonDiv").hidden = true;
  }

  function handleSignout(event) {
    setUser({});
    document.getElementById("buttonDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "745606007983-jdkefmdnivrn1o6nj9853eqmaflltjtk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", height: 50, padding: "20" } // customization attributes
    );
    google.accounts.id.prompt();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      document.getElementById("buttonDiv").hidden = true;
    }
  }, []);

  function handleContinue() {
    console.log(phone);
  }
  return (
    <Router>
      <div>
        {Object.keys(user).length !== 0 ? (
          <>
            <Navbar user={user} handleSignout={handleSignout} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AboutUs" component={AboutUs} />
            </Switch>
          </>
        ) : (
          <div className="container-fluid vh-100">
            <div>
              <div className="rounded d-flex justify-content-center">
                <div className="col-md-8 col-sm-12 shadow-lg p-5 bg-light">
                  <div style={{ border: "2px solid black", padding: "20px" }}>
                    <div className="text-center">
                      <h4 className="text-dark">Log in to WhatsMenu</h4>
                    </div>
                    <form action="">
                      <div className="p-4">
                        <div className="mb-3">
                          {/* <PhoneInputGfg style={{ width: "100%" }} /> */}
                          <PhoneInputGfg phone={phone} setPhone={setPhone} style={{ width: "100%" }} />
                        </div>
                        <div className="d-grid">
                          <Button
                            style={{ backgroundColor: "green", color: "white" }}
                            onClick={() => handleContinue()}
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    </form>
                    <h6 className="text-center">OR</h6>
                    <div>
                      <div id="buttonDiv" />
                    </div>

                    <h6 style={{ textAlign: "center", color: "blue" }}>
                      {" "}
                      Can't log in?
                    </h6>
                  </div>

                  <div style={{ color: "blue" }}>
                    <ul>
                      <li> Privacy Policy</li>
                      <li> Terms Of Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
