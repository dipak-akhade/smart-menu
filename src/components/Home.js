import React from "react";
import homedata from "./home.json";
import apidata from "./raw_api_response.json";
import "./Home.css";
import { Card, Avatar, Icon, Button, Divider } from "antd";
const { Meta } = Card;

const Homedata = homedata.homemenu;
const ApiData = apidata;
export default function Home() {
  const categories = Object.keys(ApiData.Categories);
  return (
    <div>
      {categories.map((records, i) => {
        return (
          <Card
            bodyStyle={{ background: "Gray" }}
            onClick={() => alert("Clicked - " + records)}
            title={records}
            bordered={true}
            size={"small"}
            style={{ width: 400 }}
            hoverable
            cover={
              <img
                alt="example"
                src="https://assetsnffrgf-a.akamaihd.net/assets/m/1102015169/univ/art/1102015169_univ_lsr_lg.jpg"
              />
            }
          >
            <p>
              {Object.keys(apidata.Categories[records])
                .join(", ")
                .slice(0, 100)}
              ......
            </p>
          </Card>
        );
      })}
    </div>
  );
}
