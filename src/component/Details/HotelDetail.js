import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../Header';
import {Link} from 'react-router-dom';
import Footer from '../Footer'

const url ="https://rest-details-api.herokuapp.com/rest"


class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <>
            <Header/>
            <div className="container">
                <div className="panel panel-info" >
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb}
                                style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab>OverView</Tab>
                                <Tab>Contact</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>About This Place</h2>
                                <p>{details.name} Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>Contact Us</h2>
                                <h3>{details.address}</h3>
                                <h3>Phone: 9655868686</h3>
                            </TabPanel>
                        </Tabs>
                        <Link to="/" className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Proceed Order</Link>
                    </div>
                </div>
                </div>
                <Footer date=" 19" year="2021" month="May"/>
            </>
        )
    }

    componentDidMount(){
        const hotelId=this.props.match.params.id
        axios.get(`${url}/${hotelId}`)
        .then((res) => {this.setState({details:res.data[0]})})
        
    }
}


export default Details;