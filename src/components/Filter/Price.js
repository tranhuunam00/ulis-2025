import React, { useState } from "react";
import { InputNumber, Button, Select, Divider } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;

const PricePanel = ({ ranges, title }) => {
  // Automatically update price input based on dropdown selection
  const handleRangeChange = (value) => {};

  const handleApply = () => {};

  return (
    <div
      className="price-filter-container"
      style={{
        padding: "20px",
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>

      {/* Dropdown */}
      <Select
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
    </div>
  );
};

export default PricePanel;
