import React, { Component } from 'react';
import FoodItems from './FoodItem';
import data from './data.json';

const menu = data.menu;

export class Food extends Component {
  render() {
    return (
     <>
    <div className='container'>
      
          {
               menu.map((menu)=>{
                    return(
                         <div className='row'>
                         
                               <div className='col-sm-4 col-md-12 col-lg-12'>
                              <FoodItems id={menu.id} price={menu.price} title={menu.title} desc={menu.desc} category={menu.category} url={menu.url}/>
                              </div>
                             
                    
                         </div>
                    )
                       
               })
          }

     </div>
     </>
  
    );
  }
}

export default Food;


