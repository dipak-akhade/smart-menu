import React, { Component } from 'react';

export default class FoodItems extends Component {
  render() {
    
let {id, price, title , desc , category , url} = this.props;
    return (
      <div className='container'>
         <div className='row m-3'>
         <div className='col-sm-4 col-md-5 col-lg-4'>
            <img src={url} alt="..."  style={{"height":"200px", "width":"200px"}}/>
            </div>
            <div className='col-sm-8 col-md-7 col-lg-8'>
            <div className="card-body" key={id}>
            <h5 className="card-title">
             <div className='row'>
                <div className='col-sm-8 col-md- col-lg-8'>
                {title} 
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                  {price}
                </div>
             </div>
            </h5>

            <hr/>
            <p className="card-text">{desc}</p>
          </div>
            </div>
         </div>
       
      </div>
    );
  }
}







