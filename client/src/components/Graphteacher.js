import React from "react";
import Chart from "react-apexcharts";

function Graphteacher() {
  const state = {
    options: {
      fill: {
        colors:["#19a7ce"],
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#0f6092"],
          inverseColors: true,
          opacityFrom: 0.3,
          opacityTo: 0.9,
          stops: [0, 20, 0, 100,],
          colorStops: [],
        },
      },
      colors: ["#0f6092"],
      subtitle: {
        text: "Teacher Daily Attendence Chart",
        align: "center",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: undefined,
          color: "#0f6092",
        },
      },
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["05 MAY","06 MAY","07 MAY","08 MAY","09 MAY","10 MAY","11 MAY","12 MAY","13 MAY"],
      },
    },
    series: [
      {
        name: "Teachers",
        data: [30, 40, 117, 50, 49, 60, 70, 91, 125],
      },
        // {
        //   name: "series-2",
        //   data: [30, 23, 35, 15, 49, 45, 70, 34, 125],
        // },
    ],
  };
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width={560}
        height={320}
      />
    </>
  );
}
export default Graphteacher;