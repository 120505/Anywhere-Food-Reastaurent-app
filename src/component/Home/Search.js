import React,{Component} from 'react';
import './Search.css';
import Footer from '../Footer'
import {withRouter} from 'react-router-dom';

const url= "https://rest-details-api.herokuapp.com/city";
const rurl="https://rest-details-api.herokuapp.com/rest?city=";
//const url="https://eduintern.herokuapp.com/city";

class Search extends Component{
    constructor(){
        super()
        this.state={
            city:"",
            rest:""
        }
    }
    //Display City in option
    renderCity = (data) => {
     
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}>{item.name} | {item.city_name}</option>
                )
            })
        }
    }
    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>{item.name}</option>
                )
            })
        }
    }
    handleCity=(event)=>{
        console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${rurl}${cityId}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            this.setState({rest:data})
        })
    }

    handleRest=(event)=>{
        this.props.history.push(`/details/${event.target.value}`)
    }
    render(){
        return(
            <React.Fragment>
            <div class="imageContainer">
                
                <div id="logo">
                    <img  id="logo_img" src="images/logo_img.jpg" />
                </div>
                <div id="heading">
                    Find Bést Restaurants, Cafés, bars
                </div>
                <div class="locationSelector">
                    <select class="dropdown" onChange={this.handleCity}>
                        <option value="1">------SELECT CITY-------</option>
                        {this.renderCity(this.state.city)}
                    </select> 
                    <select class="dropdown" style={{marginLeft:"10px"}} onChange={this.handleRest}> 
                        {this.renderRest(this.state.rest)}  
                    </select>
                </div>
            </div>
    </React.Fragment>
        )
    }
    //API call
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data)=> this.setState({city:data}))
        }
}
export default withRouter(Search);