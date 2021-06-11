import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Listing from "./component/listing/listingApi";
import Details from './component/Details/HotelDetail';
import DisplayApi from './component/Booking/DisplayApi';
import PlaceBooking from './component/Booking/PlaceBooking';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Route exact path="/" component={Home}  />
        <Route path="/listing/:id" component={Listing}  />
        <Route path="/details/:id" component={Details}/>
        <Route path="/viewbooking" component={DisplayApi}/>
        <Route path="/booking/:name" component={PlaceBooking}/>
        <Route path="/Home" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        </BrowserRouter>
    )
}
export default Routing;