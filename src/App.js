import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <Navbar/>
            <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/AboutUs" > <AboutUs/> </Route>
            </Switch>
    </Router>

    </>
  );
}

export default App;
