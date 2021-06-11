import React,{Component} from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';
import Footer from '../Footer'

// class QuickSearch extends Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <div class="quickSearchContainer"> 
//                     <p class="quickSearchHeading">
//                         Quick Searches
//                     </p>
//                     <p class="quickSearchSubHeading">
//                         Discover Réstaurants By Meal Type
//                     </p>
//                     <a href="file:///Users/aakash/Desktop/api/Edu_Nov_Internship/day3/one.html">
//                         <div class="tileContainer">
//                             <div class="tileComponent1">
//                                 <img src="images/breakfast.png" style={{height:"180px" , width:"100%"}}/>
//                             </div>
//                             <div class="tileComponent2">
//                                 <div class="componentHeading">
//                                     BreakFast
//                                 </div>
//                                 <div class="componentSubHeading">
//                                     Start Your Day with Exclusive BreakFast Options
//                                 </div>
//                             </div>
                        
//                         </div>
//                     </a>
//                     <div class="tileContainer">
//                         <div class="tileComponent1">
//                             <img src="images/lunch.png" style={{height:"180px" , width:"100%"}}/>
//                         </div>
//                         <div class="tileComponent2">
//                             <div class="componentHeading">
//                                 Lunch
//                             </div>
//                             <div class="componentSubHeading">
//                                 Start Your Day with Exclusive Lunch Options
//                             </div>
//                         </div>
                    
//                     </div>
//                     <div class="tileContainer">
//                         <div class="tileComponent1">
//                             <img src="images/snacks.png" style={{height:"180px" , width:"100%"}}/>
//                         </div>
//                         <div class="tileComponent2">
//                             <div class="componentHeading">
//                                 Snacks
//                             </div>
//                             <div class="componentSubHeading">
//                                 Start Your Day with Exclusive Snacks Options
//                             </div>
//                         </div>
                    
//                     </div>
//                     <div class="tileContainer">
//                         <div class="tileComponent1">
//                             <img src="images/dinner.png" style={{height:"180px" , width:"100%"}}/>
//                         </div>
//                         <div class="tileComponent2">
//                             <div class="componentHeading">
//                                 Dinner
//                             </div>
//                             <div class="componentSubHeading">
//                                 Start Your Day with Exclusive Dinner Options
//                             </div>
//                         </div>
                    
//                     </div>
//                     <div class="tileContainer">
//                         <div class="tileComponent1">
//                             <img src="images/drinks.png" style={{height:"180px" , width:"100%"}}/>
//                         </div>
//                         <div class="tileComponent2">
//                             <div class="componentHeading">
//                                 Drinks
//                             </div>
//                             <div class="componentSubHeading">
//                                 Start Your Day with Exclusive Drinks Options
//                             </div>
//                         </div>
                    
//                     </div>
//                     <div class="tileContainer">
//                         <div class="tileComponent1">
//                             <img src="images/nightlife.png" style={{height:"180px" , width:"100%"}}/>
//                         </div>
//                         <div class="tileComponent2">
//                             <div class="componentHeading">
//                                 NightLife
//                             </div>
//                             <div class="componentSubHeading">
//                                 Start Your Day with Exclusive NightLife Options
//                             </div>
//                         </div>
                    
//                     </div>
                    
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

const QuickSearch =(props) => {
    const renderList = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <React.Fragment>
                    <Link to={`/listing/${item._id}`}>
                        <div class="tileContainer " style={{}}>
                            <div class="tileComponent1" >
                                <img src={`/images/${item.name}.png`} className="imageStyle" />
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <b>{item.name}</b>
                                </div>
                                <div class="componentSubHeading">
                                    Start Your Day with Exclusive {item.name} Options
                                </div>
                            </div>
                            
                        </div>
                        
                    </Link>
                    </React.Fragment>
                    )
                })
            }
        }
        return(
            <React.Fragment>
            <div class="quickSearchContainer"> 
                <p class="quickSearchHeading">
                    Quick Searches
                </p>
                <p class="quickSearchSubHeading">
                    Discover Réstaurants By Meal Type
                </p>
                {renderList(props)}
            </div>
            <Footer date=" 19" year="2021" month="May"/>
            </React.Fragment>
        )
}

export default QuickSearch;