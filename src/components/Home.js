import React from 'react';
import homedata from './home.json';
import './Home.css';


const Homedata = homedata.homemenu;
export default function Home() {
  return (
    <div>
       {
          
          
          Homedata.map((records,i)=>{
              return(

                  <> 
                 <div className='container my-3'>
                    <div className='row box boxshadow m-3'>
                    <div >
                      <h5>{records.category}</h5>
                    </div>
                        <div className='row'>
                            <div>
                            <p>{records.dishes.slice(0,70)}.........</p>
                            <a href={records.url} class="btn btn-primary btn-small">Read More</a>
                            </div>
                     </div>
                    </div>
     
                  </div>





                  </>   
              )
          })
      }
    </div>
  );
}
