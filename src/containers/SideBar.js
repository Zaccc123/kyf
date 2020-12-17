import React, { useState } from "react";
import { Tabs, Input } from "antd";
import { useAppContext } from "../libs/contextLib";

const { TabPane } = Tabs;

export default function SideBar() {
  const {
    yearlyIncome,
    setYearlyIncome,
    yearlyExpenses,
    setYearlyExpenses,
    currentSaving,
    setCurrentSaving,
  } = useAppContext();
  const [monthlyIncome, setMonthlyIncome] = useState(yearlyIncome / 12);
  const [monthlyExpenses, setMonthlyExpenses] = useState(yearlyExpenses / 12);

  function isNumber(value) {
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Monthly" key="1">
          Income:
          <Input
            prefix="$"
            suffix="SGD"
            maxLength={25}
            onChange={(e) => {
              const { value } = e.target;
              if (isNumber(value)) {
                setMonthlyIncome(value);
                setYearlyIncome(value * 12);
              }
            }}
            value={monthlyIncome}
          />
          <br />
          <br />
          Expenses:
          <Input
            prefix="$"
            suffix="SGD"
            onChange={(e) => {
              const { value } = e.target;
              if (isNumber(value)) {
                setMonthlyExpenses(value);
                setYearlyExpenses(value * 12);
              }
            }}
            value={monthlyExpenses}
          />
        </TabPane>
        <TabPane tab="Yearly" key="2">
          Income:
          <Input
            prefix="$"
            suffix="SGD"
            onChange={(e) => {
              const { value } = e.target;
              if (isNumber(value)) {
                setMonthlyIncome(value / 12);
                setYearlyIncome(value);
              }
            }}
            value={yearlyIncome}
          />
          <br />
          <br />
          Expenses:
          <Input
            prefix="$"
            suffix="SGD"
            onChange={(e) => {
              const { value } = e.target;
              if (isNumber(value)) {
                setMonthlyExpenses(value / 12);
                setYearlyExpenses(value);
              }
            }}
            value={yearlyExpenses}
          />
        </TabPane>
      </Tabs>
      Current Saving:
      <Input
        prefix="$"
        suffix="SGD"
        onChange={(e) => {
          const { value } = e.target;
          if (isNumber(value)) {
            setCurrentSaving(value);
          }
        }}
        value={currentSaving}
      />
    </div>
  );
}
