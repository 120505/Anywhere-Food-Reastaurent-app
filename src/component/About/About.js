import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import './About.css'
const About = (props) => {
    
    return(
        <div>
            <Header/>
            <div class="imageContainer">
                <div id="logo">
                    <img  id="logo_img" src="images/logo_img.jpg" />
                </div>
            </div>
            <h1 id="aboutheading"> <center>ABOUT US</center></h1>
            <div className="container">
                <p><b>ANYWHERE FOOD is India's largest online food ordering and delivery platform, founded in 2021. Anywhere Food is based in Bangalore, India, and as of May 2021, was operating in 100 Indian cities. In early, Anywhere Food expanded into general product deliveries under the general Stores.The company built a dedicated delivery network and grew rapidly, primarily driven by the focus on logistics and locking in key resources. he bounty of the Indian food is on full-display here, so you're guaranteed a taste of the region no matter what you order, but the stone hearth centerpiece is your clue to order anything. You can place your order just by visiting the restaurent. Happy Eating:) </b></p>
                <ul typeof="square" className="list">
                    <li><b>Industry: Online food ordering</b></li>
                    <li><b>Services: Food delivery</b></li>
                    <li><b>Headquarters: Bangalore, Noida, Delhi</b></li>
                    <li><b>Founded: May 2021</b></li>
                    <li><b>Type of business: Privately held company</b></li>
                    <li><b>Founder: Avika Tyagi</b></li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}

export default About;