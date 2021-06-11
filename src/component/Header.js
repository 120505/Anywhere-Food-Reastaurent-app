import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

// const Header =(props) => {
//     return(
//         <>
//            <div>
//                     <Link className="logo" to="/">AnyWhere Food</Link>
//                     <ul className="nav navbar-nav navbar-right">
//                     <li><a href="#"  style={{color:"black"}}><span className="glyphicon glyphicon-user" style={{color:"black"}} ></span> Sign Up</a></li>
//                     <li><a href="#"  style={{color:"black", marginLeft:"1px"}}><span className="glyphicon glyphicon-log-in" style={{color:"black"}} ></span> Login</a></li>
//                     </ul>
//             </div>
//         </>
//     )
// }

const Header =(props) => {
    // return(
    //     <centre>
    //        <div id="header">
    //                 <Link className="logo" to="/">Edureka</Link>
    //                 <span className="leftopt" style={{float:'right'}}>Developer Funnel</span>
    //         </div>
    //     </centre>
    // )
return(
    <nav className="navbar navbar-inverse" style={{backgroundColor:"#f18973"}}>
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <Link to="/" class="navbar-brand" id="design">ANYWHERE FOOD</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/Home"  style={{color:"lightgrey", fontSize:"20px"}}><b>Home</b></Link></li>
                        <li><Link to="/About" style={{color:"lightgrey" , fontSize:"20px"}}><b>About</b></Link></li>
                        <li><Link to="/Contact" style={{color:"lightgrey", fontSize:"20px"}}><b>Contact us </b></Link></li>
                    </ul>
                </div>  
            </div>
            <div className="clearfix" ></div>
            </nav>
)

}

export default Header;