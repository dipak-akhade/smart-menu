import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Food from './components/Food';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aboutus from './components/Aboutus';
import SoupandSalad from './components/SoupandSalad';
import Starters from './components/Starters';
import Home from './components/Home';



function App() {
  return (
    <>
    <Router>

    <Navbar/>
    {/* <Starters/> */}
   
      <Switch>
           
           <Route exact path="/"><Home/></Route>
            <Route exact path="/Aboutus"><Aboutus/></Route>
            <Route exact path="/SoupandSalad"> <SoupandSalad/> </Route>
            <Route exact path="/Starters"> <Food /></Route>
            <Route exact path="/Breakfast"> <Food categoty="Breakfast"/></Route>
            <Route exact path="/MainCourse"> <Food/></Route>
            <Route exact path="/Rice&biryani"> <Food/></Route>
            <Route exact path="/Pizza&Pasta"> <Food/></Route>
            <Route exact path="/Noodles"> <Food/></Route>
            <Route exact path="/Burger&Sandwitches"> <Food/></Route>
            <Route exact path="/Desserts"> <Food/></Route>
            
      </Switch>
    </Router>
   
    
    </>
  );
}

export default App;
