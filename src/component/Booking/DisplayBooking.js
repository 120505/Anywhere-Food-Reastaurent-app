import React from 'react';
import Footer from '../Footer';
import Header from '../Header'

const BookingView = (props) => {
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                /*if(useranem==item.name){*/
                    return(
                    
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.rest_id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                        </tr>
                    )    
                /*}*/
                
            })
        }
    }

    return(
        <React.Fragment>
        <Header/>
        <div className="container">
            <center><h3>Booking List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Rest</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
        <Footer date=" 19" year="2021" month="May"/>
        </React.Fragment>
    )
}

export default BookingView