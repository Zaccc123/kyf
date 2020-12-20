import React, { useState } from "react";
import SideBar from "./containers/SideBar";
import MainChart from "./containers/MainChart";
import Result from "./containers/Result";
import { AppContext } from "./libs/contextLib";
// import "./App.css";

export default function App() {
  const [yearlyIncome, setYearlyIncome] = useState(36000);
  const [yearlyExpenses, setYearlyExpenses] = useState(24000);
  const [currentSaving, setCurrentSaving] = useState(10000);

  return (
    <AppContext.Provider
      value={{
        yearlyIncome,
        setYearlyIncome,
        yearlyExpenses,
        setYearlyExpenses,
        currentSaving,
        setCurrentSaving,
      }}
    >
      <div className="md:container md:mx-auto px-4">
        <div className="md:flex border-2 border-gray-500">
          <div className="md:flex-none border-2 border-gray-500 px-2">
            <SideBar />
          </div>
          <div className="md:flex-auto h-4/5 border-2 border-gray-500">
            <Result />
            <MainChart />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
