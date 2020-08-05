import React from "react";
import "./App.css";
import MealsTable from "./components/MealsTable";
import Header from './components/Header';
import MealsForm from "./components/MealsForm";

function App() {
  const data = [
    {
      day: "Monday",
      breakfast: "Puri-Rajma",
      lunch: "Ganji",
      dinner: "NA"
    },
    {
      day: "Tuesday",
      breakfast: "Puri - Rajma",
      lunch: "Ganji",
      dinner: "NA"
    },
    {
      day: "Wednesday",
      breakfast: "Idli Sambar",
      lunch: "Ganji",
      dinner: "NA"
    },
    {
      day: "Thursday",
      breakfast: "Idli-Sambar",
      lunch: "Ganji",
      dinner: "NA"
    },
    {
      day: "Friday",
      breakfast: "Dosa - Sambar",
      lunch: "Ganji",
      dinner: "NA"
    },
    {
      day: "Saturday",
      breakfast: "Puri-Rajma",
      lunch: "Ganji",
      dinner: "NA"
    },
    {
      day: "Sunday",
      breakfast: "Puri-Rajma",
      lunch: "Ganji",
      dinner: "NA"
    }
  ];
  return (
    <div className="App">
      <Header/>
      <br/><br/><br/>
      <MealsForm/>
      <br/><br/><br/>
      <MealsTable rows={data}/>
    </div>
  );
}

export default App;
