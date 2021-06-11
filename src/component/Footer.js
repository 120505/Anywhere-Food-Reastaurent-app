import React from 'react';
import './Footer.css';
var Footer=(props)=>{
    return(
        <footer style={{marginTop:"5px"}}>
            <center>
            <hr/>
            <div className="clearfix"></div>
                    <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook space1" style={{color:"blue"}}></i></a>
                    <a href="https:www.instagram.com/"><i class="fa fa-instagram space1" style={{color:"#e95950", marginLeft:"15px"}}></i></a>
                    <a href="https://www.linkedin.com/login"><i class="fa fa-linkedin space1" style={{color:"#0e76a8" ,  marginLeft:"15px"}}></i></a>
                    <a href="https://www.youtube.com/"><i class="fa fa-youtube space1" style={{color:"red" ,  marginLeft:"15px"}}></i></a>
                <p style={{marginBottom:"10px"}}><b>&copy; ANYWHERE FOOD <br></br> Avika Tyagi, {props.date} {props.month} {props.year} </b></p>
            </center>
        </footer>

    )

}
export default Footer;