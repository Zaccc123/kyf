import React, { useState } from "react";
import { Tabs, Input } from "antd";

const { TabPane } = Tabs;

export default function SideBar() {
  return (
    <div className="SideBar">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Monthly" key="1">
          Income:
          <Input
            prefix="$"
            suffix="SGD"
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
          <br />
          <br />
          Expenses:
          <Input prefix="$" suffix="SGD" />
        </TabPane>
        <TabPane tab="Yearly" key="2">
          Income:
          <Input prefix="$" suffix="SGD" />
          <br />
          <br />
          Expenses:
          <Input prefix="$" suffix="SGD" />
        </TabPane>
      </Tabs>
    </div>
  );
}
