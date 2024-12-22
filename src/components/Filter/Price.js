import React, { useState } from "react";
import { InputNumber, Button, Select, Divider } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;

const PricePanel = ({ ranges, title }) => {
  const handleRangeChange = (value) => {};

  const handleApply = () => {};

  return (
    <Select
      className="rangede"
      defaultValue={"Tất cả " + title}
      style={{ width: "100%", marginBottom: "15px" }}
      onChange={handleRangeChange}
    >
      {ranges.map((range) => (
        <Option key={range.value} value={range.value}>
          {range.label}
        </Option>
      ))}
    </Select>
  );
};

export default PricePanel;
