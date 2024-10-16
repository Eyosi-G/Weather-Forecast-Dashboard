import React, { useEffect, useState } from "react";
import * as weatherApiService from "../services/weather-api.service";
import { Alert, Divider, Input } from "antd";
import CurrentWeatherData from "./CurrentWeatherData";
import ForcastList from "./ForcastList";

const SearchCityWeather = () => {
  const [forcasts, setForcasts] = useState([]);
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const onSearchCitiesHandler = (value) => {
    setForcasts([]);
    setWeather();
    setSearchText(value);
  };

  const searchCityWeatherHandler = (city) => {
    setLoading(true);
    weatherApiService.fetchWeather(city).then((resp) => {
      if (resp.error) {
        console.log(resp.error);
        setLoading(false);
        setError(resp.error);
        // message.error(resp.error);
        return;
      }
      setWeather(resp);
      searchFiveDayForcastsHandler(searchText);
    });
  };

  const searchFiveDayForcastsHandler = (city) => {
    weatherApiService
      .fiveDayForcast(city)
      .then((resp) => {
        if (resp.error) {
          setError(resp.error);
          return;
        }
        setForcasts(extractForcast(resp.list).slice(0, 5));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const extractForcast = (forcasts) => {
    const dailyForecasts = {};
    for (let forcast of forcasts) {
      const date = forcast.dt_txt.split(" ")[0];
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = forcast;
      }
    }
    return Object.values(dailyForecasts);
  };
  useEffect(() => {
    if (searchText) {
      searchCityWeatherHandler(searchText);
    }
  }, [searchText]);
  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-2">
        <div className="">
          <Input.Search
            onChange={() => setError("")}
            loading={loading}
            placeholder="City"
            onSearch={onSearchCitiesHandler}
          />
          {error && (
            <Alert message={error} type="error" className="my-2 capitalize" />
          )}
        </div>
      </div>
      {weather && <CurrentWeatherData forcasts={forcasts} weather={weather} />}
      <Divider />
      <ForcastList forcasts={forcasts} />
    </div>
  );
};

export default SearchCityWeather;
