import React, { useState } from "react";
import { Row, Col } from "antd";
import SideBar from "./containers/SideBar";
import MainChart from "./containers/MainChart";
import Result from "./containers/Result";
import { AppContext } from "./libs/contextLib";
import "./App.css";

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
      <Row>
        <Col span={6}>
          <div className="SideBar">
            <SideBar />
          </div>
        </Col>
        <Col span={18}>
          <div className="MainResult">
            <Result />
            <MainChart />
          </div>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}
