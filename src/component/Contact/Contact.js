import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Contact = (props) => {
    
    return(
        <div>
            <Header/>
            <div class="imageContainer">
                <div id="logo">
                    <img  id="logo_img" src="images/logo_img.jpg" />
                </div>
            </div>
            <h1 id="aboutheading"> <center>CONTACT US</center></h1>
            <center>
                <h4 >
                    <i class="fa fa-map-marker" style={{color:"black" ,  marginLeft:"15px", height:"300px", color:"crimson"}}> OUR ADDRESS
                    <hr/>
                    <h4 style={{color:"black"}}> ANYWHERE FOOD Office - Block I and J, 3rd floor, <br/> Outer Ring Road, Kaverappa Layout, Devarabisanahalli <br/> Kadabeesanahalli Bengaluru, KA 560103 </h4> 
                    <h5 style={{color:"cornflowerblue", fontSize:"20px"}}>
                        Phone Number: +91 702 456 7890<br/>
                        Customer Care Number : +91 234 678 9045 <br/>
                        Email : anywherefood@gmail.com <br/>    
                    </h5>
                    </i>
                    <marquee id="scrooling" ><p style={{marginTop:"5px"}}>NOTE: In case of any query feel free to contact us. The customer care helpline number is available 24 x 7. </p></marquee>
                    <Footer/>
                </h4>
                
            </center>
            
        </div>
    )
}

export default Contact;