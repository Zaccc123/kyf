import React, { useState } from "react";
import { Tabs, Input } from "antd";

const { TabPane } = Tabs;

export default function SideBar() {
  const [monthlyIncome, setMonthlyIncome] = useState(3000);
  const [yearlyIncome, setYearlyIncome] = useState(36000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(2000);
  const [yearlyExpenses, setYearlyExpenses] = useState(24000);
  const [saving, setSaving] = useState(10000);

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
            setSaving(value);
          }
        }}
        value={saving}
      />
    </div>
  );
}
