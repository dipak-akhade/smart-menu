import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, userEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT token: ", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
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
      { theme: "outline", size: "large" } // customization attributes
    );
    google.accounts.id.prompt();
  }, []);

  //If we have a user: Show the homepage
  //If we not have a user: show sign in button
  return (
    <>
      <div id="buttonDiv" />
      {Object.keys(user).length != 0 && (
        <div>
          <div>
            <button onClick={(e) => handleSignout(e)}>Sign Out</button>
            <p>Hello {user.name}</p>
          </div>
          <div>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/AboutUs" component={AboutUs} />
              </Switch>
            </Router>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
