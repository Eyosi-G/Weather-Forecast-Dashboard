import { Typography } from "antd";
import moment from "moment";
import React from "react";
import ForcastItem from "./ForcastItem";
import ReactApexChart from "react-apexcharts";

const ForcastList = ({ forcasts }) => {
  
  return (
    <div>
      <div className="grid sm:grid-cols-5 grid-cols-2 gap-2">
        {forcasts.map((forcast) => {
          return <ForcastItem forcast={forcast} />;
        })}
      </div>
    </div>
  );
};

export default ForcastList;
