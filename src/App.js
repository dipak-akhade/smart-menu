import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, userEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {SiCodechef} from "react-icons/si";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

function App() {
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
      { theme: "outline", size: "large" , 'height': 50,'padding':'20'} // customization attributes
    );
    google.accounts.id.prompt();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      document.getElementById("buttonDiv").hidden = true;
    }


  }, []);

  return (
    <Router>
      <div>
        {Object.keys(user).length !== 0 ? (
          <>
            <Navbar   user={user} handleSignout={handleSignout} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AboutUs" component={AboutUs} />
            </Switch>
          </>
        ) : (
          <div class="container-fluid vh-100" >
            <div class="" style={{"margin-top":"70px"}}>
              <div class="rounded d-flex justify-content-center">
                <div class="col-md-8 col-sm-12 shadow-lg p-5 bg-light" >
                <h1 className="text-center" style={{"color":"orange", "fontFamily":"cursive","padding":"20px"}}> <SiCodechef style={{"color":"blue","fontSize":"50px"}}/> WhatsMenu</h1>
                 <div style={{"border":'2px solid black',"padding":"20px"}}>
                          <div class="text-center">
                              <h4 class="text-dark">Log in to WhatsMenu</h4>
                            </div>
                            <form action="">
                              <div class="p-4">
                                <div class="input-group mb-3">
                                  <input type="number" class="form-control" placeholder="Enter Phone Number"/>
                                </div>
                                <div className="d-grid">
                                  <Link to="/home" class="btn btn-success text-center mt-2">
                                    Continue
                                  </Link>
                                </div>
                              </div>
                            </form>
                            <h6 class="text-center">OR Sign In With</h6>
                            <div>
                              <div id="buttonDiv" />
                          </div>

                          <h6 style={{"textAlign":"center", "color":"blue"}}> Can't log in ?</h6>
                  </div>

                  <div style={{"color":"blue"}}>
                    <ul>
                      <li> Privacy Plocy</li>
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
