import React from "react";
import ForcastChart from "./ForcastChart";
import { Typography } from "antd";

const CurrentWeatherData = ({ weather, forcasts }) => {
  const imgName = weather.weather[0].icon.replace("n", "d");
  return (
    <div className="mt-5">
      <div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:items-center ">
          <div>
            <div className="flex sm:flex-row flex-col items-center ">
              <ForcastChart forcasts={forcasts} />
              <div className="order-1 sm:order-2">
                <div className="flex items-center ">
                  <img
                    className="h-20"
                    src={`https://openweathermap.org/img/wn/${imgName}@2x.png`}
                  />
                  <div className="text-5xl font-bold text-orange-600">
                    {weather.main.temp}
                  </div>
                  <sup className="text-lg font-bold">°C</sup>
                  <div className="ml-5 hidden sm:block">
                    <div className="">
                      <Typography.Text>
                        Humidity: {weather.main.humidity}%
                      </Typography.Text>
                    </div>
                    <div className="">
                      <Typography.Text>
                        Pressure: {weather.main.pressure}hPa
                      </Typography.Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:hidden gap-x-2">
                  <div className="">
                    <Typography.Text>
                      Humidity: {weather.main.humidity}%
                    </Typography.Text>
                  </div>
                  <div className="">
                    <Typography.Text>
                      Pressure: {weather.main.pressure}hPa
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherData;
