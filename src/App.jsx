import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Dance"],
  ["Walk", 11],
  ["Squats", 2],
  ["Jogging", 2],
  ["Yoga", 2],
  ["Stairs", 7],
];

export const options = {
  title: 'Physical activities',
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;