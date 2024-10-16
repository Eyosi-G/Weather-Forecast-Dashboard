import { Typography } from "antd";
import moment from "moment";
import React from "react";

const ForcastItem = ({ forcast }) => {
  const date = forcast.dt_txt.split(" ");
  const momentDate = moment(forcast.dt_txt);
  const imgName = forcast.weather[0].icon.replace("n", "d");

  return (
    <div className="flex flex-col items-center border py-2 w-full">
      <Typography.Text className="font-bold">{date[0]}</Typography.Text>
      <Typography.Text>{momentDate.format("hh:mm A")}</Typography.Text>
      <img
        className="h-20"
        src={`https://openweathermap.org/img/wn/${imgName}@2x.png`}
      />

      <div className="flex gap-x-2">
        <Typography.Text>
          {forcast.main.temp_max}
          <sup>°</sup>
        </Typography.Text>
        <Typography.Text>
          {forcast.main.temp_min}
          <sup>°</sup>
        </Typography.Text>
      </div>
    </div>
  );
};

export default ForcastItem;
