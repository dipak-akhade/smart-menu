import React from "react";
import homedata from "./home.json";
import apidata from "./raw_api_response.json";
import "./Home.css";

const Homedata = homedata.homemenu;
const ApiData = apidata;
export default function Home() {
  const categories = Object.keys(ApiData.Categories);
  return (
    <div>
      {categories.map((records, i) => {
        return (
          <>
            <div className="container my-3">
              <div className="row box boxshadow m-3">
                <div>
                  <h5>{records}</h5>
                </div>
                <div className="row">
                  <div>
                    <p>
                      {Object.keys(apidata.Categories[records])
                        .join(", ")
                        .slice(0, 100)}
                      ......
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
