
import React from 'react';
import apidata from "./raw_api_response.json";
import { Card, Avatar, Icon, Button, Divider,Space } from "antd";
import "./home.css";
const { Meta } = Card;

export default function CategoryItems(props) {
    const { category } = props;

    // Filter the data for the selected category
    const categoryData = apidata.Categories[category];
    return (
      <div className='bodycolor'>
        {/* <h2 className='category'>{category}</h2> */}
        {Object.keys(categoryData).map((itemKey, i) => {
          const item = categoryData[itemKey];
          return (
            <div className='container'>
                <div className='card-container '>
                <Card className='boxshadow'
                key={i}
                // bodyStyle={{ background: "Gray" }}
              
                // title={itemKey}
                bordered={true}
                // size={"small"}
                style={{ width:350, padding:10}}
                hoverable
                cover={
                  <img
                    alt="WhatsMenu"
                    src={item.Image}
                    height={180}
                    width={150}
                    title="CategoryImage"
                  />
                }
              >
                
                <Meta
                  // avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                  title={<span style={{fontSize:'22px'}}>{itemKey}</span>}
                  description={<span style={{color: 'black',fontFamily:'Times New Roman'}}>{item.Description}</span>}
                />
                <div className='mt-2' style={{display:"flex"}}>
                  <div >
                    <span style={{fontWeight:'600', fontSize:'17px'}}>{item.Likes} </span><i class="fa-solid fa-thumbs-up" style={{color:'blue', fontSize:'18px'}}></i>
                  </div>
                  <div>
                    <span style={{marginLeft:'135px', fontWeight:'600', fontSize:'17px'}}>   <i class="fa-solid fa-indian-rupee-sign" style={{color:'black', fontSize:'18px'}}></i>  {item.Price}</span>
                  </div>
                </div>
                {/* <p>
                 {item.Description}
                </p>
                <Space direction="vertical" style={{ width: "100%" }}>
                {item.Likes}
               </Space> */}
              
              </Card>
             </div>
            </div>
          );
        })}
      </div>
    );
}



// import React from 'react';
// import apidata from "./raw_api_response.json";
// import "./home.css";

// export default function CategoryItems(props) {
//     const { category } = props;

//     // Filter the data for the selected category
//     const categoryData = apidata.Categories[category];
//     return (
//       <div className='menu-container'>
//         <h2 className='category'>{category}</h2>
//         {Object.keys(categoryData).map((itemKey, i) => {
//           const item = categoryData[itemKey];
//           return (
//             <div className='menu-item' key={i}>
//               {/* <img className='menu-item-image' src={item.image} alt="img........"/> */}
//             <div class="menu-item-image">
//             <img src={item.Image} alt="img........" />
//           </div>
//              <div className='menu-item-details'>
//              <h3 className='menu-item-title'>{itemKey}</h3>
//               <p className='menu-item-description'>{item.Description}</p>
//               {/* <p className='menu-item-likes'>{item.Likes}</p>
//               <p className='menu-item-price'>{item.Price}</p> */}
//             <div class="menu-item-info">
//               <p class="menu-item-likes">{item.Likes} Likes</p>
//               <p class="menu-item-price">${item.Price}</p>
//             </div>
//              </div>
       
//             </div>
//           );
//         })}
//       </div>
//     );
// }
