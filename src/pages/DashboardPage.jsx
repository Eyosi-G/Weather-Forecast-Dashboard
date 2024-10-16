import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchCityWeather from "../components/SearchCityWeather";
const DashboardPage = () => {

  return (
    <div className="px-2 pb-10">
      <NavBar />
      <SearchCityWeather  />
    </div>
  );
};

export default DashboardPage;
