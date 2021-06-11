import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) => {
    const renderList = ({restaurentList}) => {
        if(restaurentList){
            if(restaurentList.length>0){
                return restaurentList.map((item) => {
                    return(
                        < >
                        <div class="first" style={{marginBottom:'10px'}}>
                            <div class="maindiv">
                                <div class="image">
                                    <img src={item.thumb}
                                    className="imgClass"/>
                                </div>
                            </div>
                            <b><hr style={{border: "1.5px solid gray"}} /></b>
                            <div class="head">
                                <div className="details space">
                                    <h1><Link to={`/details/${item._id}`}>{item.name}</Link></h1>
                                    <p>Rs.{item.cost} Per Two</p>
                                    <p>{item.city_name}</p>
                                    
                                </div>
                                
                                    <div class="moredetails vl">
                                    <h2 className="space">Address</h2>
                                    <p className="space">{item.locality}</p>
                                    <p className="space">{item.address}</p>
                                    </div>
                                </div>
                        </div>
                        </>
                        
                    )
                })
            }else{
                return(
                    <div>
                        <center>
                            <h2>No Data On This Filter</h2>
                        </center>
                    </div>
                )
            }
            
        }else
        {
            return(
                <div>
                    <center style={{marginTop: "200px"}}>
                    <img src="/images/loading.gif"/>
                    </center>
                </div>
            )
        }
    }

    return(
        <>
        {renderList(props)}
        </>
    )
}

export default ListingDisplay