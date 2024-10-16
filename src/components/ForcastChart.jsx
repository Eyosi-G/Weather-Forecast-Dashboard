import React from "react";
import ReactApexChart from "react-apexcharts";

const ForcastChart = ({ forcasts }) => {
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      show: false,
    },

    xaxis: {
      categories: forcasts.map((forcast) => {
        const date = forcast.dt_txt.split(" ");
        return date[0];
      }),
      labels: {
        show: false,
      },
    },
    title: {
      text: "",
      align: "left",
    },
    yaxis: {
      title: {
        text: "",
        show: false,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0, 
        right: 0, 
        top: 0, 
        bottom: 0 
    }
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#f4511e"],
  };

  const series = [
    {
      name: "Temprature",
      data: forcasts.map((forcast) => {
        return forcast.main.temp;
      }),
    },
  ];
  return (
    <div className="order-2 sm:order-1">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={150}
      />
    </div>
  );
};

export default ForcastChart;
