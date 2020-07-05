import React from 'react';
import './App.css';
//import LoginPage from './LoginPage';
import PageWrapper from './Components/PageWrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TourSection_Flight from './Components/TourSection_Flight';
import CarSection from './Components/CarSection';
import TourSection_Vacation from './Components/TourSection_Vacation';
import BlogSection from './Components/BlogSection';
import ContactSection from './Components/ContactSection';
import Hotel from './Components/TourSection_Hotel'
import NavBar from './Components/Header';
import Foot from './Components/FooterSection';
import FlightsResult from './Components/FlightsResult';
import DeadEnd from './Components/DeadEnd';
import ShoppingCart from './Components/ShoppingCart';
import Crud from './Crud';
import HotelsResult from './Components/HotelsResult';
import fblogin from './Components/fblogin';
import AddShopping from './Components/addShopping';

const App = () => {
  return (
    <Router>
    <div id="fh5co-page">
     <NavBar/>
     <Route exact path="/" component={PageWrapper}/>
     <Route exact path="/hotel" component={Hotel}/>
     <Route exact path="/flights" component={TourSection_Flight}/>
     <Route exact path="/car" component={CarSection}/>
     <Route exact path="/vacations" component={TourSection_Vacation}/>
     <Route exact path="/blog" component={BlogSection}/>
     <Route exact path="/contact" component={ContactSection}/>
     <Route exact path='/flights-result' component={FlightsResult} />
     <Route exact path="/deadend" component={DeadEnd} />
     <Route exact path="/hotels-result" component={HotelsResult} />
     <Route exact path="/cart" component={ShoppingCart} />
     <Route exact path="/login" component={Crud} />
     <Route exact path="/fbl" component={fblogin} />
     <Route exact path="/addShopping" component={AddShopping} />
     <Foot/>
     </div>
   </Router>
  );
};

export default App;

// https://medium.com/reprogramabr/configura%C3%A7%C3%B5es-iniciais-do-firebase-realtime-database-com-reactjs-f76141eed5d9