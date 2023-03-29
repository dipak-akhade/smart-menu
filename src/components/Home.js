import React from "react";
import homedata from "./home.json";
import apidata from "./raw_api_response.json";
import "./Home.css";
import { Card, Avatar, Icon, Button, Space, Divider } from "antd";
const { Meta } = Card;

const Homedata = homedata.homemenu;
const ApiData = apidata;
const ApiParsedData = JSON.parse(JSON.stringify(apidata));
export default function Home() {
  const categories = Object.keys(ApiData.Categories);
  console.log(ApiParsedData.Categories["Breakfast"].Image);
  return (
    <div>
      {categories.map((records, i) => {
        return (
          <Card
            bodyStyle={{ background: "Gray" }}
            onClick={() => alert("Clicked - " + records)}
            bordered={true}
            size={"small"}
            style={{ width: "auto", padding: "10px 10px" }}
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
              .....
            </p>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" block>
                Go to {records}
              </Button>
            </Space>
          </Card>
        );
      })}
    </div>
  );
}
