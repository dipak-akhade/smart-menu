import React, { Component } from 'react';
import Data from './data.json';
import './Style.css';
import {BsCurrencyRupee} from "react-icons/bs";

const menudata = Data.menu

export default class FoodItems extends Component {
  render() {
    
    return (
     <>
     <h3 style={{"textAlign":"center", "margin":"20px"}}>Soup and Salad</h3>
        {
          
          
            menudata.map((records,i)=>{
                return(

                    <> 
                   <div className='container'>
                      <div className='row box boxshadow m-3'>
                      <div className='col-sm-4 col-md-5 col-lg-4'>
                        <img src={records.url} alt="..." className='img' />
                      </div>
                          <div className='col-sm-8 col-md-7 col-lg-8'>
                          <div className="card-body" key={records.id}>
                          <h5 className="card-title">
                          <div className='row'>
                              <div className='col-sm-8 col-md- col-lg-8'>
                              {records.title} 
                              </div>
                              <div className='col-sm-4 col-md-4 col-lg-4'>
                              <BsCurrencyRupee/>
                             {records.price}
                           
                                <span className="badge bg-success notify-badge"> {records.ratings} <i className="far fa-star"></i></span>
                               
                              </div>
                          </div>
                          </h5>

                          <hr/>
                          <p className="card-text">{records.desc}</p>
                          </div>
                       </div>
                      </div>
       
                    </div>





                    </>   
                )
            })
        }

        

     </>
    );
  }
}

