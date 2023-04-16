import React, { useState } from "react";
import apidata from "./raw_api_response.json";
import "./home.css";
import { Card, Avatar, Icon, Button, Divider, Space } from "antd";
import CategoryItem from "./CategoryItems"; // import the CategoryItem component
const { Meta } = Card;

const ApiData = apidata;
const ApiParsedData = JSON.parse(JSON.stringify(apidata));

function Home() {
  const categories = Object.keys(ApiData.Categories);
  const [category, setCategory] = useState(""); // add state for the selected category

  // Handle click on a category
  const handleCategoryClick = (category) => {
    setCategory(category); // set the selected category in state
  };

  // Render the Home component
  return (
    <div className=" bodycolor">
      {category ? (
        // If a category is selected, render the CategoryItem component with the selected category
        <CategoryItem category={category} />
      ) : (
        // If no category is selected, render the list of categories
        categories.map((records, i) => {
          return (
            <div>
              <div className="card-container ">
                <Card
                  className="boxshadow"
                  key={i}
                  // bodyStyle={{ background: "Gray" }}
                  onClick={() => handleCategoryClick(records)}
                  // title={records}
                  bordered={true}
                  size={"small"}
                  style={{ width: 400, padding: 10 }}
                  hoverable
                  cover={
                    <img
                      alt="WhatsMenu"
                      src={ApiParsedData.Categories[records].Image}
                      height={"auto"}
                      title="CategoryImage"
                    />
                  }
                >
                  <h2>{records}</h2>
                  <p>
                    {Object.keys(apidata.Categories[records])
                      .join(", ")
                      .slice(0, 100)}
                    ......
                  </p>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button type="primary" block>
                      Go to {records}
                    </Button>
                  </Space>
                </Card>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
